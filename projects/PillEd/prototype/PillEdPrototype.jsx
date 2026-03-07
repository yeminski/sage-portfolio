import { useState } from "react";

const SCREENS = ["home", "onboarding", "scan", "alert", "info", "schedule"];

const teal = "#0d9488";
const tealLight = "#f0fdf9";
const tealMid = "#ccfbf1";
const red = "#ef4444";
const redLight = "#fef2f2";

// ─── helpers ────────────────────────────────────────────────────────────────
function PhoneShell({ children }) {
  return (
    <div style={{
      width: 320, height: 620,
      background: "#111827",
      borderRadius: 44,
      padding: "10px 8px",
      boxShadow: "0 30px 80px rgba(0,0,0,0.45), inset 0 0 0 1px #374151",
      position: "relative",
      flexShrink: 0,
      overflow: "hidden",
    }}>
      {/* notch */}
      <div style={{
        position: "absolute", top: 14, left: "50%",
        transform: "translateX(-50%)",
        width: 90, height: 24,
        background: "#111827",
        borderRadius: 12,
        zIndex: 10,
      }} />
      <div style={{
        width: "100%", height: "100%",
        background: "white",
        borderRadius: 36,
        overflow: "hidden",
        position: "relative",
      }}>
        {/* status bar */}
        <div style={{
          height: 44, background: teal,
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "0 20px 6px",
        }}>
          <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>9:41</span>
          <span style={{ color: "white", fontSize: 11 }}>●●●</span>
        </div>
        <div style={{ height: "calc(100% - 44px)", overflowY: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function ProgressDots({ current }) {
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "8px 0 4px" }}>
      {SCREENS.map((s, i) => (
        <div key={s} style={{
          width: i === current ? 20 : 6,
          height: 6,
          borderRadius: 3,
          background: i === current ? teal : "#e5e7eb",
          transition: "all 0.3s",
        }} />
      ))}
    </div>
  );
}

function Btn({ label, onClick, secondary, small }) {
  return (
    <button onClick={onClick} style={{
      background: secondary ? "white" : teal,
      color: secondary ? teal : "white",
      border: secondary ? `1.5px solid ${teal}` : "none",
      borderRadius: 14,
      padding: small ? "8px 20px" : "13px 28px",
      fontWeight: 700,
      fontSize: small ? 13 : 15,
      cursor: "pointer",
      width: secondary ? "auto" : "100%",
      letterSpacing: 0.3,
    }}>
      {label}
    </button>
  );
}

// condition → recommended meds map
const COND_MEDS = {
  "Diabetes":       [{ name: "Metformin", note: "Blood sugar control" }, { name: "Insulin", note: "Glucose regulation" }, { name: "Glipizide", note: "Sulfonylurea" }],
  "Hypertension":   [{ name: "Lisinopril", note: "ACE inhibitor" }, { name: "Amlodipine", note: "Calcium channel blocker" }, { name: "Hydrochlorothiazide", note: "Diuretic" }],
  "Heart disease":  [{ name: "Aspirin", note: "Blood thinner" }, { name: "Atorvastatin", note: "Statin / cholesterol" }, { name: "Metoprolol", note: "Beta blocker" }],
  "Asthma":         [{ name: "Albuterol", note: "Rescue inhaler" }, { name: "Fluticasone", note: "Inhaled corticosteroid" }, { name: "Montelukast", note: "Leukotriene modifier" }],
  "Pregnancy":      [{ name: "Folic Acid", note: "Neural tube prevention" }, { name: "Prenatal Vitamins", note: "Daily supplement" }, { name: "Progesterone", note: "Hormone support" }],
  "Thyroid":        [{ name: "Levothyroxine", note: "Thyroid hormone" }, { name: "Methimazole", note: "Hyperthyroid" }],
  "Depression/Anxiety": [{ name: "Sertraline", note: "SSRI antidepressant" }, { name: "Escitalopram", note: "SSRI" }, { name: "Bupropion", note: "NDRI antidepressant" }],
};

// ─── SCREEN 0: Onboarding ────────────────────────────────────────────────────
function OnboardingScreen({ next }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState([]);
  const [customCondition, setCustomCondition] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [selMeds, setSelMeds] = useState([]);
  const [customMed, setCustomMed] = useState("");
  const [showManualInput, setShowManualInput] = useState(false);
  const [scanMode, setScanMode] = useState(false);
  const [scanDone, setScanDone] = useState(false);

  const conditions = ["Diabetes", "Hypertension", "Heart disease", "Asthma", "Pregnancy", "Thyroid", "Depression/Anxiety"];

  const toggle = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
  };

  // build recommended meds from selected conditions (deduplicated)
  const recommended = [];
  const seen = new Set();
  selected.forEach(c => {
    (COND_MEDS[c] || []).forEach(m => {
      if (!seen.has(m.name)) { seen.add(m.name); recommended.push(m); }
    });
  });

  const addCustomMed = () => {
    if (customMed.trim() && !selMeds.includes(customMed.trim())) {
      setSelMeds([...selMeds, customMed.trim()]);
      setCustomMed("");
      setShowManualInput(false);
    }
  };

  const addCustomCondition = () => {
    const val = customCondition.trim();
    if (val && !selected.includes(val)) {
      setSelected([...selected, val]);
      setCustomCondition("");
      setShowCustomInput(false);
    }
  };

  return (
    <div style={{ padding: "20px 20px 16px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ fontSize: 11, color: teal, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>
        STEP {step + 1} OF 3
      </div>

      {/* ── STEP 0: Basic info ── */}
      {step === 0 && (
        <>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginBottom: 4 }}>
            Welcome to PillEd 💊
          </div>
          <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 24, lineHeight: 1.5 }}>
            Your smart medication companion. Let's set up your health profile.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[{ label: "Full Name", placeholder: "Jane Doe" }, { label: "Age", placeholder: "34" }].map(f => (
              <div key={f.label}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 4 }}>{f.label}</div>
                <input readOnly placeholder={f.placeholder} style={{
                  width: "100%", padding: "10px 12px",
                  border: "1.5px solid #e5e7eb", borderRadius: 10,
                  fontSize: 14, color: "#111827", boxSizing: "border-box", background: "#f9fafb",
                }} />
              </div>
            ))}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 4 }}>Sex at Birth</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["Female", "Male", "Other"].map(s => (
                  <div key={s} style={{
                    flex: 1, padding: "9px 0", textAlign: "center",
                    border: s === "Female" ? `2px solid ${teal}` : "1.5px solid #e5e7eb",
                    borderRadius: 10, fontSize: 12, fontWeight: 600,
                    color: s === "Female" ? teal : "#6b7280",
                    background: s === "Female" ? tealLight : "white", cursor: "pointer",
                  }}>{s}</div>
                ))}
              </div>
            </div>
          </div>
          <Btn label="Continue →" onClick={() => setStep(1)} />
        </>
      )}

      {/* ── STEP 1: Health conditions ── */}
      {step === 1 && (
        <>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#111827", marginBottom: 2 }}>
            Any health conditions?
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 16, lineHeight: 1.5 }}>
            Select all that apply — helps us flag contraindications.
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
            {conditions.map(c => {
              const on = selected.includes(c);
              return (
                <div key={c} onClick={() => toggle(selected, setSelected, c)} style={{
                  padding: "7px 13px", borderRadius: 20,
                  border: `1.5px solid ${on ? teal : "#e5e7eb"}`,
                  background: on ? tealLight : "white",
                  color: on ? teal : "#374151",
                  fontWeight: on ? 700 : 500, fontSize: 12, cursor: "pointer",
                  transition: "all 0.15s",
                }}>{on && "✓ "}{c}</div>
              );
            })}
            {/* custom chips */}
            {selected.filter(c => !conditions.includes(c)).map(c => (
              <div key={c} style={{
                padding: "7px 13px", borderRadius: 20,
                border: `1.5px solid ${teal}`,
                background: tealLight, color: teal, fontWeight: 700, fontSize: 12,
                display: "flex", alignItems: "center", gap: 6,
              }}>
                ✓ {c}
                <span onClick={() => setSelected(selected.filter(s => s !== c))}
                  style={{ cursor: "pointer", fontSize: 14, lineHeight: 1 }}>×</span>
              </div>
            ))}
          </div>

          {/* + Add other condition */}
          {!showCustomInput ? (
            <div onClick={() => setShowCustomInput(true)} style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              color: teal, fontSize: 12, fontWeight: 700, cursor: "pointer",
              marginBottom: 16,
            }}>
              <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> Add other condition
            </div>
          ) : (
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <input
                autoFocus
                value={customCondition}
                onChange={e => setCustomCondition(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addCustomCondition()}
                placeholder="e.g. Lupus, PCOS…"
                style={{
                  flex: 1, padding: "8px 12px",
                  border: `1.5px solid ${teal}`, borderRadius: 10,
                  fontSize: 13, outline: "none", boxSizing: "border-box",
                }}
              />
              <button onClick={addCustomCondition} style={{
                background: teal, color: "white", border: "none",
                borderRadius: 10, padding: "8px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer",
              }}>Add</button>
              <button onClick={() => { setShowCustomInput(false); setCustomCondition(""); }} style={{
                background: "white", color: "#9ca3af", border: "1.5px solid #e5e7eb",
                borderRadius: 10, padding: "8px 10px", fontSize: 13, cursor: "pointer",
              }}>✕</button>
            </div>
          )}

          <Btn label="Continue →" onClick={() => setStep(2)} />
          <div style={{ marginTop: 8 }}>
            <Btn label="← Back" onClick={() => setStep(0)} secondary small />
          </div>
        </>
      )}

      {/* ── STEP 2: Current medications ── */}
      {step === 2 && (
        <>
          <div style={{ fontSize: 19, fontWeight: 800, color: "#111827", marginBottom: 2 }}>
            Current medications?
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 14, lineHeight: 1.5 }}>
            Add what you're already taking so we can check interactions.
          </div>

          {/* scan mode overlay */}
          {scanMode ? (
            <div style={{ marginBottom: 14 }}>
              <div style={{
                height: 140, background: scanDone ? tealLight : "#0f172a",
                borderRadius: 14, display: "flex", alignItems: "center",
                justifyContent: "center", flexDirection: "column", gap: 8,
                position: "relative", overflow: "hidden",
              }}>
                {!scanDone ? (
                  <>
                    <div style={{ fontSize: 32 }}>📷</div>
                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Point at your medication bottle</div>
                    <div style={{
                      position: "absolute", width: 100, height: 2,
                      background: `linear-gradient(90deg, transparent, ${teal}, transparent)`,
                    }} />
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 28 }}>✅</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: teal }}>Lisinopril 10mg detected</div>
                  </>
                )}
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                {!scanDone ? (
                  <button onClick={() => setScanDone(true)} style={{
                    flex: 1, background: teal, color: "white", border: "none",
                    borderRadius: 10, padding: "9px 0", fontWeight: 700, fontSize: 13, cursor: "pointer",
                  }}>Simulate Scan</button>
                ) : (
                  <button onClick={() => {
                    if (!selMeds.includes("Lisinopril 10mg")) setSelMeds([...selMeds, "Lisinopril 10mg"]);
                    setScanMode(false); setScanDone(false);
                  }} style={{
                    flex: 1, background: teal, color: "white", border: "none",
                    borderRadius: 10, padding: "9px 0", fontWeight: 700, fontSize: 13, cursor: "pointer",
                  }}>Add to My List</button>
                )}
                <button onClick={() => { setScanMode(false); setScanDone(false); }} style={{
                  background: "white", color: "#9ca3af", border: "1.5px solid #e5e7eb",
                  borderRadius: 10, padding: "9px 14px", fontSize: 13, cursor: "pointer",
                }}>✕</button>
              </div>
            </div>
          ) : null}

          {/* recommended based on conditions */}
          {recommended.length > 0 && (
            <>
              <div style={{ fontSize: 10, fontWeight: 700, color: teal, letterSpacing: 1, marginBottom: 8 }}>
                SUGGESTED BASED ON YOUR CONDITIONS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
                {recommended.map(m => {
                  const on = selMeds.includes(m.name);
                  return (
                    <div key={m.name} onClick={() => toggle(selMeds, setSelMeds, m.name)} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "9px 12px",
                      border: `1.5px solid ${on ? teal : "#e5e7eb"}`,
                      borderRadius: 10, background: on ? tealLight : "white", cursor: "pointer",
                    }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: on ? 700 : 500, color: on ? teal : "#374151" }}>{m.name}</div>
                        <div style={{ fontSize: 10, color: "#9ca3af" }}>{m.note}</div>
                      </div>
                      <div style={{
                        width: 20, height: 20, borderRadius: 10, flexShrink: 0,
                        background: on ? teal : "#e5e7eb",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {on && <span style={{ color: "white", fontSize: 12, fontWeight: 700 }}>✓</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* manually added */}
          {selMeds.filter(m => !recommended.map(r => r.name).includes(m)).length > 0 && (
            <>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", letterSpacing: 1, marginBottom: 8 }}>
                ADDED BY YOU
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
                {selMeds.filter(m => !recommended.map(r => r.name).includes(m)).map(m => (
                  <div key={m} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "9px 12px", border: `1.5px solid ${teal}`,
                    borderRadius: 10, background: tealLight,
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: teal }}>{m}</div>
                    <span onClick={() => setSelMeds(selMeds.filter(s => s !== m))}
                      style={{ color: "#9ca3af", cursor: "pointer", fontSize: 16 }}>×</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* no conditions selected fallback */}
          {recommended.length === 0 && (
            <div style={{
              padding: "14px", borderRadius: 12, background: "#f9fafb",
              border: "1.5px dashed #e5e7eb", textAlign: "center",
              fontSize: 12, color: "#9ca3af", marginBottom: 14,
            }}>
              No conditions selected — add medications manually below
            </div>
          )}

          {/* action buttons */}
          {!scanMode && (
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              <button onClick={() => setShowManualInput(v => !v)} style={{
                flex: 1, padding: "9px 0", borderRadius: 10,
                border: `1.5px solid ${teal}`, background: "white",
                color: teal, fontWeight: 700, fontSize: 12, cursor: "pointer",
              }}>✏️ Type manually</button>
              <button onClick={() => { setScanMode(true); setScanDone(false); }} style={{
                flex: 1, padding: "9px 0", borderRadius: 10,
                border: `1.5px solid ${teal}`, background: "white",
                color: teal, fontWeight: 700, fontSize: 12, cursor: "pointer",
              }}>📷 Scan label</button>
            </div>
          )}

          {showManualInput && (
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              <input
                autoFocus
                value={customMed}
                onChange={e => setCustomMed(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addCustomMed()}
                placeholder="e.g. Ibuprofen 400mg"
                style={{
                  flex: 1, padding: "9px 12px",
                  border: `1.5px solid ${teal}`, borderRadius: 10,
                  fontSize: 13, outline: "none", boxSizing: "border-box",
                }}
              />
              <button onClick={addCustomMed} style={{
                background: teal, color: "white", border: "none",
                borderRadius: 10, padding: "9px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer",
              }}>Add</button>
            </div>
          )}

          <Btn label="Set Up My Profile ✓" onClick={() => next({ conditions: selected, meds: selMeds })} />
          <div style={{ marginTop: 8 }}>
            <Btn label="← Back" onClick={() => setStep(1)} secondary small />
          </div>
        </>
      )}

      <ProgressDots current={0} />
    </div>
  );
}


// ─── SCREEN 1: Home ──────────────────────────────────────────────────────────
function HomeScreen({ next, profile }) {
  const meds = profile?.meds?.length ? profile.meds : ["Lisinopril", "Metformin"];
  const conditions = profile?.conditions?.length ? profile.conditions : ["Hypertension", "Diabetes"];
  const name = "Jane";

  const schedule = [
    { time: "8:00 AM", med: meds[0] || "Lisinopril", done: true },
    { time: "12:00 PM", med: meds[1] || "Metformin", done: false },
    { time: "8:00 PM", med: meds[0] || "Lisinopril", done: false },
  ];

  const adherence = 78;
  const circumference = 2 * Math.PI * 28;
  const offset = circumference - (adherence / 100) * circumference;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* header */}
      <div style={{
        background: `linear-gradient(135deg, ${teal} 0%, #0f766e 100%)`,
        padding: "16px 20px 20px",
      }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600, letterSpacing: 0.8 }}>
          GOOD MORNING
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 14 }}>
          {name} 👋
        </div>

        {/* adherence ring + today summary */}
        <div style={{
          background: "rgba(255,255,255,0.15)",
          borderRadius: 16, padding: "14px 16px",
          display: "flex", alignItems: "center", gap: 16,
        }}>
          {/* SVG ring */}
          <svg width={72} height={72} style={{ flexShrink: 0 }}>
            <circle cx={36} cy={36} r={28} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={7} />
            <circle cx={36} cy={36} r={28} fill="none" stroke="white" strokeWidth={7}
              strokeDasharray={circumference} strokeDashoffset={offset}
              strokeLinecap="round" transform="rotate(-90 36 36)" />
            <text x={36} y={40} textAnchor="middle" fontSize={14} fontWeight={800} fill="white">{adherence}%</text>
          </svg>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Weekly Adherence</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 3 }}>
              {schedule.filter(s => s.done).length} of {schedule.length} doses taken today
            </div>
            <div style={{
              marginTop: 8, display: "inline-block",
              background: "rgba(255,255,255,0.2)", borderRadius: 10,
              padding: "4px 10px", fontSize: 11, color: "white", fontWeight: 600,
            }}>
              🔥 4-day streak
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 20px" }}>

        {/* TODAY'S SCHEDULE */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>TODAY'S DOSES</div>
            <div style={{ fontSize: 11, color: teal, fontWeight: 600 }}>See all</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {schedule.map((s, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 12px",
                background: s.done ? "#f9fafb" : "white",
                border: `1.5px solid ${s.done ? "#f3f4f6" : "#e5e7eb"}`,
                borderRadius: 12,
                opacity: s.done ? 0.65 : 1,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: s.done ? "#f3f4f6" : tealLight,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, flexShrink: 0,
                }}>
                  {s.done ? "✓" : "💊"}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: s.done ? "#9ca3af" : "#111827" }}>
                    {s.med}
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>{s.time}</div>
                </div>
                {!s.done && (
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: teal,
                    padding: "4px 10px", borderRadius: 8,
                    background: tealLight, border: `1px solid ${tealMid}`,
                  }}>Take</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 10 }}>QUICK ACTIONS</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { icon: "📷", label: "Scan New Med", color: teal, bg: tealLight, action: next },
              { icon: "⚠️", label: "Check Interactions", color: "#f59e0b", bg: "#fffbeb", action: null },
              { icon: "📋", label: "My Med List", color: "#6366f1", bg: "#eef2ff", action: null },
              { icon: "💰", label: "Compare Prices", color: "#10b981", bg: "#ecfdf5", action: null },
            ].map((a, i) => (
              <div key={i} onClick={a.action || undefined} style={{
                padding: "14px 12px",
                background: a.bg,
                border: `1.5px solid ${a.color}20`,
                borderRadius: 14,
                cursor: a.action ? "pointer" : "default",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{a.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: a.color }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HEALTH ALERTS */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 10 }}>ALERTS</div>
          <div style={{
            padding: "12px 14px",
            background: "#fff7ed",
            border: "1.5px solid #fed7aa",
            borderRadius: 12,
            display: "flex", gap: 10, alignItems: "flex-start",
            marginBottom: 8,
          }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#92400e" }}>Refill reminder</div>
              <div style={{ fontSize: 11, color: "#78350f", marginTop: 2 }}>
                {meds[0] || "Lisinopril"} — 5 days supply remaining
              </div>
            </div>
          </div>
          {conditions.includes("Diabetes") && (
            <div style={{
              padding: "12px 14px",
              background: tealLight,
              border: `1.5px solid ${tealMid}`,
              borderRadius: 12,
              display: "flex", gap: 10, alignItems: "flex-start",
            }}>
              <span style={{ fontSize: 18 }}>💡</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#065f46" }}>Diabetes tip</div>
                <div style={{ fontSize: 11, color: "#047857", marginTop: 2 }}>
                  Take Metformin with meals to reduce stomach upset.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* bottom nav */}
      <div style={{
        position: "sticky", bottom: 0,
        width: "100%",
        background: "white",
        borderTop: "1px solid #f3f4f6",
        display: "flex",
        padding: "8px 0 10px",
      }}>
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "💊", label: "Meds", active: false },
          { icon: "📷", label: "Scan", active: false },
          { icon: "📊", label: "History", active: false },
        ].map(n => (
          <div key={n.label} style={{
            flex: 1, textAlign: "center", cursor: "pointer",
          }}>
            <div style={{ fontSize: 18 }}>{n.icon}</div>
            <div style={{ fontSize: 9, fontWeight: n.active ? 700 : 500, color: n.active ? teal : "#9ca3af", marginTop: 2 }}>
              {n.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SCREEN 2: Scan ──────────────────────────────────────────────────────────
function ScanScreen({ next }) {
  const [scanned, setScanned] = useState(false);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* viewfinder */}
      <div style={{
        height: 260,
        background: scanned ? tealLight : "#0f172a",
        position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {!scanned ? (
          <>
            {/* corners */}
            {[[-1,-1],[1,-1],[-1,1],[1,1]].map(([sx,sy], i) => (
              <div key={i} style={{
                position: "absolute",
                top: sy < 0 ? 28 : undefined,
                bottom: sy > 0 ? 28 : undefined,
                left: sx < 0 ? 50 : undefined,
                right: sx > 0 ? 50 : undefined,
                width: 24, height: 24,
                borderTop: sy < 0 ? `3px solid ${teal}` : undefined,
                borderBottom: sy > 0 ? `3px solid ${teal}` : undefined,
                borderLeft: sx < 0 ? `3px solid ${teal}` : undefined,
                borderRight: sx > 0 ? `3px solid ${teal}` : undefined,
              }} />
            ))}
            {/* scan line */}
            <div style={{
              position: "absolute",
              width: 170, height: 2,
              background: `linear-gradient(90deg, transparent, ${teal}, transparent)`,
              top: "40%",
              animation: "none",
            }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>💊</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Point camera at medication label</div>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: 44, marginBottom: 8 }}>✅</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: teal }}>Robitussin Adult Detected</div>
            <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>Non Drowsy Cough + Chest Congestion</div>
          </div>
        )}
      </div>

      <div style={{ padding: "16px 20px" }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: "#111827", marginBottom: 4 }}>
          Scan Your Medication
        </div>
        <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 16, lineHeight: 1.5 }}>
          Our OCR engine identifies your medication and checks it against your current medications instantly.
        </div>

        {!scanned ? (
          <Btn label="📷  Simulate Scan" onClick={() => setScanned(true)} />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Btn label="Check Interactions →" onClick={next} />
            <Btn label="Scan Again" onClick={() => setScanned(false)} secondary />
          </div>
        )}
      </div>
      <ProgressDots current={1} />
    </div>
  );
}

// ─── SCREEN 2: Alert ─────────────────────────────────────────────────────────
function AlertScreen({ next, back }) {
  return (
    <div style={{ padding: "20px 20px 16px", fontFamily: "system-ui, sans-serif" }}>
      {/* alert banner */}
      <div style={{
        background: redLight,
        border: `1.5px solid #fca5a5`,
        borderRadius: 14,
        padding: "14px 16px",
        marginBottom: 16,
        display: "flex", gap: 12, alignItems: "flex-start",
      }}>
        <div style={{ fontSize: 24, flexShrink: 0 }}>⚠️</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: red, marginBottom: 2 }}>HIGH RISK INTERACTION</div>
          <div style={{ fontSize: 12, color: "#7f1d1d", lineHeight: 1.5 }}>
            Robitussin Adult + Lisinopril may cause elevated blood pressure and reduced drug efficacy.
          </div>
        </div>
      </div>

      <div style={{ fontSize: 15, fontWeight: 800, color: "#111827", marginBottom: 12 }}>
        Drug Interaction Details
      </div>

      {[
        { drug1: "Robitussin", drug2: "Lisinopril", risk: "HIGH", color: red, bg: redLight, detail: "Dextromethorphan may reduce ACE inhibitor effectiveness" },
        { drug1: "Robitussin", drug2: "Metformin", risk: "LOW", color: "#16a34a", bg: "#f0fdf4", detail: "Minor — monitor blood sugar levels as precaution" },
      ].map((r, i) => (
        <div key={i} style={{
          border: `1.5px solid ${r.bg === redLight ? "#fca5a5" : "#bbf7d0"}`,
          borderRadius: 12,
          padding: "12px 14px",
          marginBottom: 10,
          background: r.bg,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
              {r.drug1} × {r.drug2}
            </div>
            <div style={{
              fontSize: 10, fontWeight: 800, color: r.color,
              padding: "2px 8px", borderRadius: 20,
              border: `1px solid ${r.color}`,
            }}>{r.risk} RISK</div>
          </div>
          <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>{r.detail}</div>
        </div>
      ))}

      <div style={{
        background: "#fffbeb",
        border: "1.5px solid #fde68a",
        borderRadius: 12,
        padding: "12px 14px",
        marginBottom: 16,
        fontSize: 12,
        color: "#92400e",
        lineHeight: 1.5,
      }}>
        💡 <strong>Recommendation:</strong> Consult your doctor before taking Robitussin Adult with your current medications.
      </div>

      <Btn label="View Drug Info →" onClick={next} />
      <div style={{ marginTop: 8 }}>
        <Btn label="← Scan Again" onClick={back} secondary small />
      </div>
      <ProgressDots current={2} />
    </div>
  );
}

// ─── SCREEN 3: Drug Info ──────────────────────────────────────────────────────
function InfoScreen({ next, back }) {
  const [tab, setTab] = useState("overview");
  const tabs = ["overview", "dosage", "storage"];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* drug header */}
      <div style={{ background: teal, padding: "16px 20px 14px" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: 0.8 }}>IDENTIFIED MEDICATION</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "white", marginTop: 2 }}>Robitussin Adult</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>Dextromethorphan HBr · 15mg/5mL</div>
      </div>

      {/* tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #e5e7eb", background: "white" }}>
        {tabs.map(t => (
          <div key={t} onClick={() => setTab(t)} style={{
            flex: 1, textAlign: "center",
            padding: "10px 0",
            fontSize: 12, fontWeight: 700,
            color: tab === t ? teal : "#9ca3af",
            borderBottom: tab === t ? `2px solid ${teal}` : "2px solid transparent",
            cursor: "pointer",
            textTransform: "capitalize",
            transition: "all 0.15s",
          }}>{t}</div>
        ))}
      </div>

      <div style={{ padding: "16px 20px" }}>
        {tab === "overview" && (
          <>
            <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.65, marginBottom: 14 }}>
              Robitussin Adult is a <strong>cough suppressant</strong> used to temporarily relieve cough caused by the common cold, flu, or other breathing illnesses.
            </div>
            {[
              { icon: "✅", label: "Use for", text: "Dry cough, chest congestion" },
              { icon: "❌", label: "Avoid if", text: "Taking MAOIs, chronic cough, asthma" },
              { icon: "👁️", label: "Side effects", text: "Dizziness, drowsiness, nausea" },
            ].map(r => (
              <div key={r.label} style={{
                display: "flex", gap: 10, padding: "10px 0",
                borderBottom: "1px solid #f3f4f6",
              }}>
                <span style={{ fontSize: 16 }}>{r.icon}</span>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", letterSpacing: 0.8 }}>{r.label.toUpperCase()}</div>
                  <div style={{ fontSize: 13, color: "#374151", marginTop: 1 }}>{r.text}</div>
                </div>
              </div>
            ))}
          </>
        )}
        {tab === "dosage" && (
          <>
            {[
              { age: "Adults & children 12+", dose: "10 mL every 4 hrs" },
              { age: "Children 6–12", dose: "5 mL every 4 hrs" },
              { age: "Children under 6", dose: "Ask a doctor" },
            ].map(d => (
              <div key={d.age} style={{
                display: "flex", justifyContent: "space-between",
                padding: "11px 0", borderBottom: "1px solid #f3f4f6",
              }}>
                <span style={{ fontSize: 13, color: "#374151" }}>{d.age}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: teal }}>{d.dose}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>
              ⚠️ Do not exceed 6 doses (60 mL) in 24 hours.
            </div>
          </>
        )}
        {tab === "storage" && (
          <>
            {[
              { icon: "🌡️", label: "Temperature", val: "Store at 20–25°C (68–77°F)" },
              { icon: "💧", label: "Humidity", val: "Keep away from moisture" },
              { icon: "☀️", label: "Light", val: "Avoid direct sunlight" },
              { icon: "🧒", label: "Children", val: "Keep out of reach of children" },
            ].map(s => (
              <div key={s.label} style={{
                display: "flex", gap: 10, padding: "10px 0",
                borderBottom: "1px solid #f3f4f6",
              }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 700, letterSpacing: 0.8 }}>{s.label.toUpperCase()}</div>
                  <div style={{ fontSize: 13, color: "#374151", marginTop: 1 }}>{s.val}</div>
                </div>
              </div>
            ))}
          </>
        )}

        <div style={{ marginTop: 16 }}>
          <Btn label="Add to My Schedule →" onClick={next} />
        </div>
        <div style={{ marginTop: 8 }}>
          <Btn label="← Back" onClick={back} secondary small />
        </div>
      </div>
      <ProgressDots current={3} />
    </div>
  );
}

// ─── SCREEN 4: Schedule ───────────────────────────────────────────────────────
function ScheduleScreen({ back }) {
  const [added, setAdded] = useState(false);
  const doses = [
    { time: "8:00 AM", label: "Morning", done: true, color: teal },
    { time: "12:00 PM", label: "Midday", done: false, color: "#f59e0b" },
    { time: "4:00 PM", label: "Afternoon", done: false, color: "#8b5cf6" },
    { time: "8:00 PM", label: "Evening", done: false, color: "#3b82f6" },
  ];

  return (
    <div style={{ padding: "20px 20px 16px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ fontSize: 11, color: teal, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>
        TODAY'S SCHEDULE
      </div>
      <div style={{ fontSize: 18, fontWeight: 800, color: "#111827", marginBottom: 16 }}>
        Dosing Timeline
      </div>

      {doses.map((d, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 14,
          padding: "10px 0",
          borderBottom: i < doses.length - 1 ? "1px solid #f3f4f6" : "none",
          opacity: d.done ? 0.6 : 1,
        }}>
          {/* dot */}
          <div style={{
            width: 12, height: 12, borderRadius: 6,
            background: d.done ? "#d1d5db" : d.color,
            flexShrink: 0,
          }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: d.done ? "#9ca3af" : "#111827" }}>
              {d.time}
              {d.done && <span style={{ marginLeft: 8, fontSize: 11, color: "#9ca3af" }}>✓ Taken</span>}
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>Robitussin · {d.label} dose · 10 mL</div>
          </div>
          {!d.done && (
            <div style={{
              fontSize: 11, fontWeight: 600, color: d.color,
              padding: "3px 10px", borderRadius: 20,
              border: `1.5px solid ${d.color}`,
              background: `${d.color}15`,
            }}>Set reminder</div>
          )}
        </div>
      ))}

      {!added ? (
        <div style={{ marginTop: 20 }}>
          <Btn label="✓  Add to My Schedule" onClick={() => setAdded(true)} />
        </div>
      ) : (
        <div style={{
          marginTop: 20,
          background: tealLight,
          border: `1.5px solid ${tealMid}`,
          borderRadius: 14,
          padding: "16px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>🎉</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: teal, marginBottom: 4 }}>All Set!</div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>
            Robitussin added to your schedule. You'll receive reminders at each dose time.
          </div>
        </div>
      )}

      <div style={{ marginTop: 12 }}>
        <Btn label="← Back" onClick={back} secondary small />
      </div>
      <ProgressDots current={4} />
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
const LABELS = ["Home", "Onboarding", "Scan", "Interactions", "Drug Info", "Schedule"];

export default function PillEdPrototype({ initialScreen = 0, screenOnly = false }) {
  const [screen, setScreen] = useState(initialScreen);
  const [profile, setProfile] = useState(null);

  const next = (data) => {
    if (data && data.conditions) setProfile(data);
    setScreen(s => Math.min(s + 1, SCREENS.length - 1));
  };
  const back = () => setScreen(s => Math.max(s - 1, 0));

  const screens = [
    <HomeScreen next={() => setScreen(2)} profile={profile} />,
    <OnboardingScreen next={(data) => { if (data?.conditions) setProfile(data); setScreen(0); }} />,
    <ScanScreen next={() => setScreen(3)} />,
    <AlertScreen next={() => setScreen(4)} back={() => setScreen(2)} />,
    <InfoScreen next={() => setScreen(5)} back={() => setScreen(3)} />,
    <ScheduleScreen back={() => setScreen(4)} />,
  ];

  if (screenOnly) {
    return (
      <div style={{ width: 320, background: "white", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ height: 44, background: teal, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 20px 6px" }}>
          <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>9:41</span>
          <span style={{ color: "white", fontSize: 11 }}>●●●</span>
        </div>
        {screens[screen]}
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8fafc",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: 24,
    }}>
      {/* header */}
      <div style={{ marginBottom: 28, textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: tealLight, border: `1.5px solid ${tealMid}`,
          borderRadius: 20, padding: "6px 16px", marginBottom: 10,
        }}>
          <span style={{ fontSize: 16 }}>💊</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: teal }}>PillEd · Interactive Prototype</span>
        </div>
        <div style={{ fontSize: 13, color: "#9ca3af" }}>Anderson Product Innovation Challenge · Nov 2022</div>
      </div>

      {/* screen nav tabs */}
      <div style={{
        display: "flex", gap: 4, marginBottom: 20, flexWrap: "wrap", justifyContent: "center",
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: "6px 8px",
      }}>
        {LABELS.map((l, i) => (
          <button key={i} onClick={() => setScreen(i)} style={{
            padding: "6px 12px",
            borderRadius: 10,
            border: "none",
            background: screen === i ? teal : "transparent",
            color: screen === i ? "white" : "#9ca3af",
            fontWeight: 700,
            fontSize: 11,
            cursor: "pointer",
            transition: "all 0.2s",
          }}>{l}</button>
        ))}
      </div>

      {/* phone */}
      <PhoneShell>
        {screens[screen]}
      </PhoneShell>
    </div>
  );
}
