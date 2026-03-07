import { useState } from "react";

const teal = "#0d9488";
const tealLight = "#f0fdf9";
const tealMid = "#ccfbf1";
const tealDark = "#0f766e";
const red = "#ef4444";
const redLight = "#fef2f2";
const purple = "#7c3aed";
const amber = "#f59e0b";

const SCREENS = ["home", "onboarding", "spending", "recommendations", "goals", "learn"];
const LABELS = ["Home", "Onboarding", "Spending", "Recommendations", "Goals", "Learn"];

// ─── Phone Shell ─────────────────────────────────────────────────────────────
function PhoneShell({ children }) {
  return (
    <div style={{
      width: 320, height: 640,
      background: "#111827",
      borderRadius: 44,
      padding: "10px 8px",
      boxShadow: "0 30px 80px rgba(0,0,0,0.45), inset 0 0 0 1px #374151",
      position: "relative", flexShrink: 0,
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
        width: 90, height: 24, background: "#111827", borderRadius: 12, zIndex: 10,
      }} />
      <div style={{
        width: "100%", height: "100%", background: "white",
        borderRadius: 36, overflow: "hidden", position: "relative",
      }}>
        <div style={{
          height: 44, background: teal,
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
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

function Btn({ label, onClick, secondary, small, color }) {
  const bg = color || teal;
  return (
    <button onClick={onClick} style={{
      background: secondary ? "white" : bg,
      color: secondary ? bg : "white",
      border: secondary ? `1.5px solid ${bg}` : "none",
      borderRadius: 14,
      padding: small ? "8px 20px" : "13px 28px",
      fontWeight: 700, fontSize: small ? 13 : 15,
      cursor: "pointer", width: secondary ? "auto" : "100%",
      letterSpacing: 0.3,
    }}>{label}</button>
  );
}

// ─── SCREEN 0: Home Dashboard ─────────────────────────────────────────────────
function HomeScreen({ setScreen, profile }) {
  const name = profile?.name || "Monica";
  const income = profile?.income || "$3,800";
  const spent = 2240;
  const saved = 312;
  const spentPct = Math.round((spent / 3800) * 100);

  const alerts = [
    { icon: "⚠️", color: "#f59e0b", bg: "#fffbeb", border: "#fde68a", title: "Overspending alert", sub: "Dining out is 40% over your monthly budget" },
    { icon: "💡", color: teal, bg: tealLight, border: tealMid, title: "Savings opportunity", sub: "Switch to PNC Yaya Card — save $46/mo on groceries" },
    { icon: "🎯", color: purple, bg: "#f5f3ff", border: "#ddd6fe", title: "Goal on track", sub: "Emergency fund: 46% funded — keep it up!" },
  ];

  const spending = [
    { label: "Housing", pct: 38, color: teal, amount: "$1,444" },
    { label: "Food", pct: 22, color: amber, amount: "$836" },
    { label: "Transport", pct: 14, color: purple, amount: "$532" },
    { label: "Other", pct: 26, color: "#9ca3af", amount: "$988" },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", paddingBottom: 10 }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${teal} 0%, ${tealDark} 100%)`,
        padding: "14px 20px 18px",
      }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600, letterSpacing: 0.8 }}>GOOD MORNING</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 14 }}>{name} 👋</div>

        {/* Balance card */}
        <div style={{
          background: "rgba(255,255,255,0.15)", borderRadius: 16, padding: "14px 16px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>MONTHLY BUDGET</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: "white", marginTop: 2 }}>{income}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>
              ${spent.toLocaleString()} spent · ${saved} saved
            </div>
          </div>
          {/* Mini donut */}
          <svg width={64} height={64}>
            <circle cx={32} cy={32} r={26} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={7} />
            <circle cx={32} cy={32} r={26} fill="none" stroke="white" strokeWidth={7}
              strokeDasharray={`${(spentPct / 100) * 163} 163`}
              strokeDashoffset={41} strokeLinecap="round"
              transform="rotate(-90 32 32)" />
            <text x={32} y={36} textAnchor="middle" fontSize={11} fontWeight={800} fill="white">{spentPct}%</text>
          </svg>
        </div>
      </div>

      <div style={{ padding: "14px 20px" }}>

        {/* Spending breakdown */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>THIS MONTH'S SPENDING</div>
            <div onClick={() => setScreen(2)} style={{ fontSize: 11, color: teal, fontWeight: 600, cursor: "pointer" }}>See details →</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {spending.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 11, color: "#6b7280", width: 68 }}>{s.label}</div>
                <div style={{ flex: 1, height: 6, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: `${s.pct}%`, height: "100%", background: s.color, borderRadius: 3 }} />
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", width: 42, textAlign: "right" }}>{s.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 10 }}>YOUR INSIGHTS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {alerts.map((a, i) => (
              <div key={i} onClick={() => i === 1 ? setScreen(3) : i === 2 ? setScreen(4) : null} style={{
                display: "flex", gap: 10, alignItems: "flex-start",
                padding: "11px 12px",
                background: a.bg, border: `1.5px solid ${a.border}`,
                borderRadius: 12, cursor: i > 0 ? "pointer" : "default",
              }}>
                <span style={{ fontSize: 18 }}>{a.icon}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: a.color }}>{a.title}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2, lineHeight: 1.4 }}>{a.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 10 }}>QUICK ACTIONS</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { icon: "🏦", label: "Find Products", color: teal, bg: tealLight, screen: 3 },
              { icon: "🎯", label: "Set Goals", color: purple, bg: "#f5f3ff", screen: 4 },
              { icon: "📊", label: "Spending", color: amber, bg: "#fffbeb", screen: 2 },
              { icon: "📚", label: "Learn", color: "#10b981", bg: "#ecfdf5", screen: 5 },
            ].map((a, i) => (
              <div key={i} onClick={() => setScreen(a.screen)} style={{
                padding: "14px 12px", background: a.bg,
                border: `1.5px solid ${a.color}20`,
                borderRadius: 14, cursor: "pointer", textAlign: "center",
              }}>
                <div style={{ fontSize: 22, marginBottom: 5 }}>{a.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: a.color }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SCREEN 1: Onboarding ─────────────────────────────────────────────────────
function OnboardingScreen({ setScreen, setProfile }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", income: "", goal: "", household: "", employment: "", experience: "", worry: "", debts: [] });
  const [linked, setLinked] = useState(false);
  const [linking, setLinking] = useState(false);
  const [goals, setGoals] = useState([]);
  const [customGoals, setCustomGoals] = useState([]);
  const [showCustomGoal, setShowCustomGoal] = useState(false);
  const [customGoalText, setCustomGoalText] = useState("");

  const goalOptions = [
    { id: "emergency", label: "Emergency Fund", icon: "🛡️" },
    { id: "car", label: "Buy a Car", icon: "🚗" },
    { id: "credit", label: "Build Credit", icon: "💳" },
    { id: "home", label: "Save for Home", icon: "🏠" },
    { id: "education", label: "Kids' Education", icon: "🎓" },
    { id: "debt", label: "Pay Off Debt", icon: "💸" },
  ];

  const toggleGoal = (id) => setGoals(g => g.includes(id) ? g.filter(x => x !== id) : [...g, id]);

  const handleLink = () => {
    setLinking(true);
    setTimeout(() => { setLinking(false); setLinked(true); }, 1500);
  };

  const finish = () => {
    setProfile({ name: form.name || "Monica", income: form.income || "$3,800", goals });
    setScreen(0);
  };

  return (
    <div style={{ padding: "20px 20px 16px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ fontSize: 11, color: teal, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>
        STEP {step + 1} OF 4
      </div>

      {/* progress bar */}
      <div style={{ height: 4, background: "#f3f4f6", borderRadius: 2, marginBottom: 20 }}>
        <div style={{ height: "100%", width: `${((step + 1) / 4) * 100}%`, background: teal, borderRadius: 2, transition: "width 0.3s" }} />
      </div>

      {/* Step 0 — Welcome */}
      {step === 0 && (
        <>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>💰</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginBottom: 6 }}>Welcome to Yaya</div>
            <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
              Your AI-powered financial coach. Let's build your personalized money plan in 3 minutes.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {[
              { icon: "📊", text: "Personalized spending insights" },
              { icon: "🏦", text: "Vetted financial product recommendations" },
              { icon: "🎯", text: "Goal-based savings planning" },
              { icon: "🤖", text: "AI coach that gets smarter over time" },
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", background: tealLight, borderRadius: 10 }}>
                <span style={{ fontSize: 18 }}>{f.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{f.text}</span>
              </div>
            ))}
          </div>
          <Btn label="Get Started →" onClick={() => setStep(1)} />
        </>
      )}

      {/* Step 1 — Basic info (richer) */}
      {step === 1 && (
        <>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#111827", marginBottom: 2 }}>Tell us about yourself</div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 16 }}>The more context you give, the more personalized your plan.</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
            {/* Name + Income row */}
            {[
              { key: "name", label: "First Name", placeholder: "Monica" },
              { key: "income", label: "Monthly Take-Home Income", placeholder: "$3,800" },
            ].map(f => (
              <div key={f.key}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 4 }}>{f.label}</div>
                <input value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  placeholder={f.placeholder} style={{
                    width: "100%", padding: "10px 12px", border: "1.5px solid #e5e7eb",
                    borderRadius: 10, fontSize: 13, boxSizing: "border-box", outline: "none",
                  }} />
              </div>
            ))}

            {/* Household size */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 4 }}>Household Size</div>
              <div style={{ display: "flex", gap: 6 }}>
                {["Just me", "2 people", "3 people", "4+"].map((s, i) => {
                  const val = String(i + 1); const on = form.household === val;
                  return (
                    <div key={s} onClick={() => setForm({ ...form, household: val })} style={{
                      flex: 1, textAlign: "center", padding: "8px 0",
                      border: `1.5px solid ${on ? teal : "#e5e7eb"}`,
                      borderRadius: 10, fontSize: 10, fontWeight: on ? 700 : 500,
                      color: on ? teal : "#6b7280", background: on ? tealLight : "white", cursor: "pointer",
                    }}>{s}</div>
                  );
                })}
              </div>
            </div>

            {/* Employment */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 4 }}>Employment Status</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Full-time", "Part-time", "Gig / Freelance", "Unemployed"].map(s => {
                  const on = form.employment === s;
                  return (
                    <div key={s} onClick={() => setForm({ ...form, employment: s })} style={{
                      padding: "7px 12px", borderRadius: 20,
                      border: `1.5px solid ${on ? teal : "#e5e7eb"}`,
                      background: on ? tealLight : "white",
                      color: on ? teal : "#374151",
                      fontSize: 11, fontWeight: on ? 700 : 500, cursor: "pointer",
                    }}>{on ? "✓ " : ""}{s}</div>
                  );
                })}
              </div>
            </div>

            {/* Debt situation */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 4 }}>Current Debt Situation</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  { id: "cc", label: "Credit card debt", icon: "💳" },
                  { id: "student", label: "Student loans", icon: "🎓" },
                  { id: "car", label: "Car payments", icon: "🚗" },
                  { id: "none", label: "No significant debt", icon: "✅" },
                ].map(d => {
                  const on = (form.debts || []).includes(d.id);
                  return (
                    <div key={d.id} onClick={() => {
                      const curr = form.debts || [];
                      setForm({ ...form, debts: on ? curr.filter(x => x !== d.id) : [...curr, d.id] });
                    }} style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "8px 12px", borderRadius: 10,
                      border: `1.5px solid ${on ? teal : "#e5e7eb"}`,
                      background: on ? tealLight : "white", cursor: "pointer",
                    }}>
                      <span style={{ fontSize: 14 }}>{d.icon}</span>
                      <span style={{ fontSize: 12, fontWeight: on ? 700 : 500, color: on ? teal : "#374151" }}>{d.label}</span>
                      {on && <span style={{ marginLeft: "auto", color: teal, fontSize: 13 }}>✓</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Financial experience */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 4 }}>Financial Experience</div>
              <div style={{ display: "flex", gap: 6 }}>
                {[
                  { id: "beginner", label: "Beginner", icon: "🌱" },
                  { id: "some", label: "Some knowledge", icon: "📖" },
                  { id: "confident", label: "Confident", icon: "💪" },
                ].map(l => {
                  const on = form.experience === l.id;
                  return (
                    <div key={l.id} onClick={() => setForm({ ...form, experience: l.id })} style={{
                      flex: 1, textAlign: "center", padding: "10px 6px",
                      border: `1.5px solid ${on ? teal : "#e5e7eb"}`,
                      borderRadius: 10, background: on ? tealLight : "white",
                      cursor: "pointer",
                    }}>
                      <div style={{ fontSize: 18, marginBottom: 3 }}>{l.icon}</div>
                      <div style={{ fontSize: 10, fontWeight: on ? 700 : 500, color: on ? teal : "#6b7280" }}>{l.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Biggest worry — free text OR voice */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#374151", marginBottom: 4 }}>
                What's your biggest financial worry right now?
              </div>
              <div style={{ position: "relative" }}>
                <textarea
                  value={form.worry || ""}
                  onChange={e => setForm({ ...form, worry: e.target.value })}
                  placeholder="e.g. I can't seem to save anything at the end of the month"
                  rows={2}
                  style={{
                    width: "100%", padding: "10px 40px 10px 12px",
                    border: "1.5px solid #e5e7eb", borderRadius: 10,
                    fontSize: 12, resize: "none", boxSizing: "border-box",
                    fontFamily: "system-ui", lineHeight: 1.5, outline: "none",
                  }}
                />
                {/* mic button */}
                <div onClick={() => {
                  setForm({ ...form, worry: "I can't seem to save anything — my expenses always catch up to my paycheck before the month is over." });
                }} style={{
                  position: "absolute", right: 8, top: 8,
                  width: 26, height: 26, borderRadius: 13,
                  background: teal, display: "flex", alignItems: "center",
                  justifyContent: "center", cursor: "pointer", fontSize: 13,
                }} title="Simulate voice input">🎤</div>
              </div>
              <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 3 }}>
                Type freely or tap 🎤 to simulate voice input
              </div>
            </div>
          </div>

          <Btn label="Continue →" onClick={() => setStep(2)} />
          <div style={{ marginTop: 8 }}><Btn label="← Back" onClick={() => setStep(0)} secondary small /></div>
        </>
      )}

      {/* Step 2 — Goals (with custom input) */}
      {step === 2 && (
        <>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#111827", marginBottom: 2 }}>What are your goals?</div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 14 }}>Select all that apply — we'll build a plan for each.</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
            {goalOptions.map(g => {
              const on = goals.includes(g.id);
              return (
                <div key={g.id} onClick={() => toggleGoal(g.id)} style={{
                  padding: "12px 10px", textAlign: "center",
                  border: `1.5px solid ${on ? teal : "#e5e7eb"}`,
                  borderRadius: 12, background: on ? tealLight : "white",
                  cursor: "pointer", transition: "all 0.15s",
                }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{g.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: on ? 700 : 500, color: on ? teal : "#374151" }}>{g.label}</div>
                  {on && <div style={{ fontSize: 10, color: teal, marginTop: 2 }}>✓</div>}
                </div>
              );
            })}
            {/* custom goal chips */}
            {customGoals.map((g, i) => (
              <div key={`custom-${i}`} style={{
                padding: "12px 10px", textAlign: "center",
                border: `1.5px solid ${teal}`, borderRadius: 12,
                background: tealLight, position: "relative",
              }}>
                <div style={{ fontSize: 20, marginBottom: 4 }}>🌟</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: teal }}>{g}</div>
                <div style={{ fontSize: 10, color: teal, marginTop: 2 }}>✓</div>
                <span onClick={() => setCustomGoals(customGoals.filter((_, j) => j !== i))}
                  style={{ position: "absolute", top: 5, right: 8, fontSize: 12, color: "#9ca3af", cursor: "pointer" }}>×</span>
              </div>
            ))}
          </div>

          {/* + Add your own */}
          {!showCustomGoal ? (
            <div onClick={() => setShowCustomGoal(true)} style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              padding: "10px", border: "1.5px dashed #e5e7eb", borderRadius: 12,
              color: teal, fontSize: 12, fontWeight: 700, cursor: "pointer", marginBottom: 14,
            }}>
              <span style={{ fontSize: 16 }}>+</span> Add your own goal
            </div>
          ) : (
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              <input autoFocus value={customGoalText} onChange={e => setCustomGoalText(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter" && customGoalText.trim()) {
                    setCustomGoals([...customGoals, customGoalText.trim()]);
                    setCustomGoalText(""); setShowCustomGoal(false);
                  }
                }}
                placeholder="e.g. Start a small business"
                style={{
                  flex: 1, padding: "9px 12px", border: `1.5px solid ${teal}`,
                  borderRadius: 10, fontSize: 12, outline: "none", boxSizing: "border-box",
                }} />
              <button onClick={() => {
                if (customGoalText.trim()) {
                  setCustomGoals([...customGoals, customGoalText.trim()]);
                  setCustomGoalText(""); setShowCustomGoal(false);
                }
              }} style={{
                background: teal, color: "white", border: "none",
                borderRadius: 10, padding: "9px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer",
              }}>Add</button>
              <button onClick={() => { setShowCustomGoal(false); setCustomGoalText(""); }} style={{
                background: "white", color: "#9ca3af", border: "1.5px solid #e5e7eb",
                borderRadius: 10, padding: "9px 10px", fontSize: 13, cursor: "pointer",
              }}>✕</button>
            </div>
          )}

          <Btn label="Continue →" onClick={() => setStep(3)} />
          <div style={{ marginTop: 8 }}><Btn label="← Back" onClick={() => setStep(1)} secondary small /></div>
        </>
      )}

      {/* Step 3 — Link bank */}
      {step === 3 && (
        <>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#111827", marginBottom: 4 }}>Connect your accounts</div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 18, lineHeight: 1.5 }}>
            Yaya uses Plaid to securely read your transaction history — we never store your login credentials.
          </div>

          {/* Plaid mock */}
          <div style={{
            border: "1.5px solid #e5e7eb", borderRadius: 16, padding: "16px",
            marginBottom: 16, background: linked ? tealLight : "white",
            borderColor: linked ? tealMid : "#e5e7eb",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: linked ? 8 : 14 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: "#000",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, color: "white", fontWeight: 800,
              }}>P</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Plaid Secure Connect</div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>Bank-grade 256-bit encryption</div>
              </div>
            </div>

            {!linked ? (
              <>
                {["Chase", "Bank of America", "Wells Fargo", "PNC Bank"].map(b => (
                  <div key={b} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "9px 0", borderBottom: "1px solid #f3f4f6",
                  }}>
                    <span style={{ fontSize: 13, color: "#374151" }}>{b}</span>
                    <span style={{ fontSize: 11, color: teal, fontWeight: 600 }}>Connect</span>
                  </div>
                ))}
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "8px 0" }}>
                <div style={{ fontSize: 24, marginBottom: 4 }}>✅</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: teal }}>Chase Bank connected</div>
                <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>3 accounts · 90 days of history imported</div>
              </div>
            )}
          </div>

          {!linked ? (
            <button onClick={handleLink} disabled={linking} style={{
              width: "100%", padding: "13px", borderRadius: 14,
              background: linking ? "#9ca3af" : "#000", color: "white",
              border: "none", fontWeight: 700, fontSize: 15, cursor: linking ? "default" : "pointer",
            }}>
              {linking ? "Connecting…" : "🔗  Simulate Plaid Link"}
            </button>
          ) : (
            <Btn label="Finish Setup →" onClick={finish} />
          )}

          <div style={{ marginTop: 10, textAlign: "center" }}>
            <span onClick={finish} style={{ fontSize: 12, color: "#9ca3af", cursor: "pointer", textDecoration: "underline" }}>
              Skip for now
            </span>
          </div>
          <div style={{ marginTop: 6 }}><Btn label="← Back" onClick={() => setStep(2)} secondary small /></div>
        </>
      )}
    </div>
  );
}

// ─── SCREEN 2: Spending Analysis ─────────────────────────────────────────────
function SpendingScreen({ setScreen }) {
  const [period, setPeriod] = useState("month");

  const categories = [
    { label: "Housing", amount: 1444, budget: 1400, icon: "🏠", color: teal, pct: 103 },
    { label: "Food & Dining", amount: 836, budget: 600, icon: "🍔", color: red, pct: 139 },
    { label: "Transport", amount: 532, budget: 500, icon: "🚗", color: amber, pct: 106 },
    { label: "Entertainment", amount: 180, budget: 200, icon: "🎬", color: "#10b981", pct: 90 },
    { label: "Health", amount: 95, budget: 150, icon: "💊", color: purple, pct: 63 },
    { label: "Savings", amount: 312, budget: 400, icon: "💰", color: teal, pct: 78 },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", paddingBottom: 10 }}>
      <div style={{ background: teal, padding: "14px 20px 16px" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600, letterSpacing: 0.8 }}>SPENDING ANALYSIS</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 12 }}>Where Your Money Goes</div>

        {/* period toggle */}
        <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: 3 }}>
          {["week", "month", "year"].map(p => (
            <div key={p} onClick={() => setPeriod(p)} style={{
              flex: 1, textAlign: "center", padding: "6px 0",
              borderRadius: 8, fontSize: 12, fontWeight: 700,
              background: period === p ? "white" : "transparent",
              color: period === p ? teal : "rgba(255,255,255,0.8)",
              cursor: "pointer", transition: "all 0.15s",
            }}>{p.charAt(0).toUpperCase() + p.slice(1)}</div>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px 20px" }}>
        {/* Total */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "12px 14px", background: "#f9fafb", borderRadius: 12, marginBottom: 16,
        }}>
          <div>
            <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600 }}>TOTAL SPENT</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#111827" }}>$3,399</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600 }}>BUDGET</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: teal }}>$3,250</div>
          </div>
        </div>

        {/* Category bars */}
        <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 12 }}>CATEGORY BREAKDOWN</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {categories.map((c, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 14 }}>{c.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{c.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: c.pct > 100 ? red : "#374151" }}>
                    ${c.amount.toLocaleString()}
                  </span>
                  {c.pct > 100 && (
                    <span style={{ fontSize: 10, color: red, fontWeight: 700, padding: "1px 6px", background: redLight, borderRadius: 6 }}>
                      +{c.pct - 100}%
                    </span>
                  )}
                </div>
              </div>
              <div style={{ height: 7, background: "#f3f4f6", borderRadius: 4, overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${Math.min(c.pct, 100)}%`,
                  background: c.pct > 100 ? red : c.color,
                  borderRadius: 4, transition: "width 0.5s",
                }} />
              </div>
              <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2 }}>Budget: ${c.budget}</div>
            </div>
          ))}
        </div>

        {/* AI insight */}
        <div style={{
          marginTop: 18, padding: "13px 14px",
          background: tealLight, border: `1.5px solid ${tealMid}`,
          borderRadius: 14,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: teal, marginBottom: 4 }}>🤖 Yaya AI Insight</div>
          <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>
            You're spending 39% more on Food & Dining than similar households in your area. Reducing by $200/mo could add <strong>$2,400/yr</strong> to your savings goals.
          </div>
          <div onClick={() => setScreen(3)} style={{ marginTop: 8, fontSize: 12, color: teal, fontWeight: 700, cursor: "pointer" }}>
            See product recommendations →
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SCREEN 3: Recommendations ────────────────────────────────────────────────
function RecommendationsScreen({ setScreen }) {
  const [saved, setSaved] = useState([]);

  const products = [
    {
      type: "Credit Card", name: "PNC Yaya Cash Back Card", match: 98,
      icon: "💳", color: teal, bg: tealLight,
      perks: ["3% cashback on groceries", "No annual fee", "0% APR for 12 months"],
      save: "$46/mo on groceries",
      reason: "Based on your $836 food spending",
    },
    {
      type: "Savings Account", name: "High-Yield Savings 4.8% APY", match: 94,
      icon: "🏦", color: "#10b981", bg: "#ecfdf5",
      perks: ["4.8% APY — 10x national average", "No minimum balance", "FDIC insured"],
      save: "+$179/yr in interest",
      reason: "Your $312 savings could work harder",
    },
    {
      type: "Auto Loan", name: "PNC Auto Refinance 5.9% APR", match: 87,
      icon: "🚗", color: purple, bg: "#f5f3ff",
      perks: ["5.9% APR — below market rate", "No prepayment penalty", "Same-day approval"],
      save: "$89/mo vs. current rate",
      reason: "Matches your 'Buy a Car' goal",
    },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", paddingBottom: 10 }}>
      <div style={{ background: teal, padding: "14px 20px 16px" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600, letterSpacing: 0.8 }}>FOR YOU</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>Vetted Financial Products</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>
          Ranked by your personal fit score — no predatory offers
        </div>
      </div>

      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {products.map((p, i) => {
            const isSaved = saved.includes(i);
            return (
              <div key={i} style={{
                border: `1.5px solid ${p.color}30`,
                borderRadius: 16, overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}>
                {/* card header */}
                <div style={{ background: p.bg, padding: "12px 14px" }}>
                  {/* top row: type label + fit badge */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ fontSize: 10, color: p.color, fontWeight: 700, letterSpacing: 1 }}>{p.type.toUpperCase()}</div>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 5,
                      padding: "4px 10px", borderRadius: 20,
                      background: p.color, color: "white",
                      fontSize: 11, fontWeight: 800,
                    }}>
                      <span>★</span><span>{p.match}% fit</span>
                    </div>
                  </div>
                  {/* bottom row: icon + name */}
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "white", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                    }}>{p.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", lineHeight: 1.3 }}>{p.name}</div>
                  </div>
                </div>
                {/* card body */}
                <div style={{ padding: "12px 14px", background: "white" }}>
                  <div style={{ fontSize: 10, color: "#9ca3af", marginBottom: 6 }}>{p.reason}</div>
                  {p.perks.map((perk, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <div style={{ width: 5, height: 5, borderRadius: 3, background: p.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: "#374151" }}>{perk}</span>
                    </div>
                  ))}
                  <div style={{
                    marginTop: 10, padding: "8px 12px",
                    background: `${p.color}10`, borderRadius: 8,
                    fontSize: 12, fontWeight: 700, color: p.color,
                  }}>
                    💰 Save {p.save}
                  </div>
                  <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                    <button style={{
                      flex: 1, padding: "9px", background: p.color, color: "white",
                      border: "none", borderRadius: 10, fontWeight: 700, fontSize: 12, cursor: "pointer",
                    }}>Apply Now</button>
                    <button onClick={() => setSaved(isSaved ? saved.filter(s => s !== i) : [...saved, i])} style={{
                      padding: "9px 14px", background: isSaved ? "#f3f4f6" : "white",
                      border: "1.5px solid #e5e7eb", borderRadius: 10,
                      fontSize: 14, cursor: "pointer",
                    }}>{isSaved ? "✅" : "🔖"}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── SCREEN 4: Goals ──────────────────────────────────────────────────────────
function GoalsScreen() {
  const [selected, setSelected] = useState(null);

  const goals = [
    { id: 0, icon: "🛡️", label: "Emergency Fund", target: 5000, current: 2300, color: teal, months: 8, monthly: 340 },
    { id: 1, icon: "🚗", label: "Buy a Car", target: 8000, current: 1200, color: purple, months: 20, monthly: 340 },
    { id: 2, icon: "💳", label: "Build Credit", target: 750, current: 620, color: amber, months: 6, monthly: null, isScore: true },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", paddingBottom: 10 }}>
      <div style={{ background: teal, padding: "14px 20px 16px" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600, letterSpacing: 0.8 }}>GOAL TRACKER</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>Your Financial Goals</div>
      </div>

      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
          {goals.map(g => {
            const pct = Math.round((g.current / g.target) * 100);
            const isOpen = selected === g.id;
            return (
              <div key={g.id} onClick={() => setSelected(isOpen ? null : g.id)} style={{
                border: `1.5px solid ${isOpen ? g.color : "#e5e7eb"}`,
                borderRadius: 14, padding: "14px",
                background: isOpen ? `${g.color}05` : "white",
                cursor: "pointer", transition: "all 0.2s",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 22 }}>{g.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{g.label}</div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>
                      {g.isScore
                        ? `${g.current} → ${g.target} credit score`
                        : `$${g.current.toLocaleString()} of $${g.target.toLocaleString()}`}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 16, fontWeight: 900, color: g.color }}>{pct}%</div>
                    <div style={{ fontSize: 10, color: "#9ca3af" }}>funded</div>
                  </div>
                </div>
                <div style={{ height: 8, background: "#f3f4f6", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: g.color, borderRadius: 4, transition: "width 0.5s" }} />
                </div>

                {isOpen && (
                  <div style={{ marginTop: 12, padding: "10px 12px", background: "#f9fafb", borderRadius: 10 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6 }}>🤖 Yaya Plan</div>
                    {g.monthly && (
                      <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>
                        Save <strong style={{ color: g.color }}>${g.monthly}/mo</strong> to reach your goal in <strong>{g.months} months</strong>. We'll auto-allocate from your spending surplus each month.
                      </div>
                    )}
                    {g.isScore && (
                      <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>
                        Apply for the <strong>PNC Yaya Card</strong> and pay on time for <strong>6 months</strong> to reach 750+. Your score improves by ~20 pts/mo.
                      </div>
                    )}
                    <div style={{
                      marginTop: 10, padding: "7px 12px",
                      background: `${g.color}15`, borderRadius: 8,
                      fontSize: 11, fontWeight: 700, color: g.color,
                    }}>
                      ⏱ Est. completion: {g.months} months
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Add goal */}
        <div style={{
          padding: "14px", border: "1.5px dashed #e5e7eb",
          borderRadius: 14, textAlign: "center", cursor: "pointer",
        }}>
          <div style={{ fontSize: 22, marginBottom: 4 }}>+</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: teal }}>Add New Goal</div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>Yaya builds a plan to get you there</div>
        </div>
      </div>
    </div>
  );
}

// ─── SCREEN 5: Learn ─────────────────────────────────────────────────────────
function LearnScreen() {
  const articles = [
    { icon: "💳", tag: "Credit", title: "How Your Credit Score Actually Works", time: "3 min", color: purple, bg: "#f5f3ff" },
    { icon: "📊", tag: "Budgeting", title: "The 50/30/20 Rule: Is It Right for You?", time: "4 min", color: teal, bg: tealLight },
    { icon: "🛡️", tag: "Emergency Fund", title: "Why 3 Months Expenses Changes Everything", time: "5 min", color: "#10b981", bg: "#ecfdf5" },
    { icon: "🏦", tag: "Banking", title: "High-Yield Savings: Stop Losing to Inflation", time: "3 min", color: amber, bg: "#fffbeb" },
    { icon: "🚫", tag: "Predatory Lending", title: "Red Flags: How to Spot a Bad Loan Offer", time: "6 min", color: red, bg: redLight },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", paddingBottom: 10 }}>
      <div style={{ background: teal, padding: "14px 20px 16px" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600, letterSpacing: 0.8 }}>FINANCIAL EDUCATION</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>Learn & Grow</div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>
          Curated for your financial situation
        </div>
      </div>

      <div style={{ padding: "16px 20px" }}>
        {/* Featured */}
        <div style={{
          background: `linear-gradient(135deg, ${teal}, ${tealDark})`,
          borderRadius: 16, padding: "18px 16px", marginBottom: 16, position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", right: -10, top: -10, fontSize: 60, opacity: 0.15 }}>🎓</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>FEATURED · 8 MIN READ</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "white", lineHeight: 1.4 }}>
            Financial Inclusion 101: Building Wealth on Any Income
          </div>
          <div style={{
            marginTop: 12, display: "inline-block",
            background: "rgba(255,255,255,0.2)", borderRadius: 8,
            padding: "6px 12px", fontSize: 11, color: "white", fontWeight: 600, cursor: "pointer",
          }}>
            Start Reading →
          </div>
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 10 }}>FOR YOUR GOALS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {articles.map((a, i) => (
            <div key={i} style={{
              display: "flex", gap: 12, alignItems: "center",
              padding: "11px 12px", border: "1.5px solid #f3f4f6",
              borderRadius: 12, background: "white", cursor: "pointer",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: a.bg, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 18, flexShrink: 0,
              }}>{a.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 10, color: a.color, fontWeight: 700,
                  letterSpacing: 0.8, marginBottom: 2,
                }}>{a.tag.toUpperCase()}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>{a.title}</div>
              </div>
              <div style={{ fontSize: 10, color: "#9ca3af", whiteSpace: "nowrap" }}>{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function YayaPrototype() {
  const [screen, setScreen] = useState(0);
  const [profile, setProfile] = useState(null);

  const screens = [
    <HomeScreen setScreen={setScreen} profile={profile} />,
    <OnboardingScreen setScreen={setScreen} setProfile={setProfile} />,
    <SpendingScreen setScreen={setScreen} />,
    <RecommendationsScreen setScreen={setScreen} />,
    <GoalsScreen />,
    <LearnScreen />,
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f0fdf9",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: 24,
    }}>
      {/* header */}
      <div style={{ marginBottom: 24, textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "white", border: `1.5px solid ${tealMid}`,
          borderRadius: 20, padding: "6px 16px", marginBottom: 8,
          boxShadow: "0 2px 12px rgba(13,148,136,0.12)",
        }}>
          <span style={{ fontSize: 16 }}>💰</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: teal }}>AI Financial Coach · Interactive Prototype</span>
        </div>
        <div style={{ fontSize: 13, color: "#9ca3af" }}>CMU Tepper Tech Innovation Challenge · Nov 2022 · Finalist</div>
      </div>

      {/* nav tabs */}
      <div style={{
        display: "flex", gap: 4, marginBottom: 20, flexWrap: "wrap", justifyContent: "center",
        background: "white", border: "1px solid #e5e7eb", borderRadius: 16, padding: "6px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}>
        {LABELS.map((l, i) => (
          <button key={i} onClick={() => setScreen(i)} style={{
            padding: "6px 12px", borderRadius: 10, border: "none",
            background: screen === i ? teal : "transparent",
            color: screen === i ? "white" : "#9ca3af",
            fontWeight: 700, fontSize: 11, cursor: "pointer", transition: "all 0.2s",
          }}>{l}</button>
        ))}
      </div>

      <PhoneShell>{screens[screen]}</PhoneShell>
    </div>
  );
}
