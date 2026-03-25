"use client";

import { useState } from "react";

/* ── Types ──────────────────────────────────────────────────────────────────── */

type Tab = "sync" | "async";
type StateId = "pending" | "confirmed" | "partial" | "expired" | "confirmed_refund";
type SyncStateId = "sync_confirmed" | "sync_declined";

interface StateInfo {
  label: string;
  labelLine2?: string;
  sublabel: string;
  trigger: string;
  variant: "teal" | "amber" | "slate" | "red";
  systemActions: { label: string; value: string }[];
  communication: string;
  edgeCases: string[];
}

/* ── Async states ───────────────────────────────────────────────────────────── */

const asyncStates: Record<StateId, StateInfo> = {
  pending: {
    label: "PENDING",
    sublabel: "Awaiting payment",
    trigger: "Order created",
    variant: "amber",
    systemActions: [
      { label: "Inventory", value: "No hold; stock remains available to other buyers" },
      { label: "CRM", value: "Status set to 'awaiting payment'; payment instructions sent immediately" },
      { label: "Finance", value: "AR entry created; revenue recognition deferred until confirmation" },
    ],
    communication:
      "Immediate confirmation + payment instructions + deadline. 24-hr reminder if unpaid. Final warning 2 hrs before expiry.",
    edgeCases: [
      "Payment submitted at exact expiry moment: if already expired, routed to CS reinstatement workflow",
      "CS reinstatement request: live inventory checked before restoring; customer notified if stock unavailable",
    ],
  },
  confirmed: {
    label: "CONFIRMED",
    sublabel: "Payment received",
    trigger: "Konbini or bank transfer confirmed",
    variant: "teal",
    systemActions: [
      { label: "Inventory", value: "Decremented atomically; fulfillment workflow triggered" },
      { label: "CRM", value: "Status updated to confirmed; shipping workflow initiated" },
      { label: "Finance", value: "AR settled; revenue recognized; CONFIRMED reconciliation event logged" },
    ],
    communication: "Payment confirmed + order confirmed + estimated shipping timeline.",
    edgeCases: [
      "Duplicate webhook from provider; idempotency key prevents second fulfillment trigger",
      "Confirmation arrives after expiry window: CS exception workflow, not auto-fulfilled",
    ],
  },
  expired: {
    label: "EXPIRED",
    sublabel: "Payment window closed",
    trigger: "2-day deadline passed",
    variant: "slate",
    systemActions: [
      { label: "Inventory", value: "Released atomically with cancellation; single op prevents phantom inventory" },
      { label: "CRM", value: "Order marked expired; cancellation event logged" },
      { label: "Finance", value: "AR entry removed; no revenue recognized; EXPIRED event logged" },
    ],
    communication: "Expiry notification with option to reorder.",
    edgeCases: [
      "Late confirmation webhook arrives: held for CS review, not auto-processed",
      "CS reinstatement: live inventory checked; customer notified if stock unavailable",
    ],
  },
  partial: {
    label: "PARTIAL",
    sublabel: "Underpayment received",
    trigger: "Bank transfer < order total",
    variant: "amber",
    systemActions: [
      { label: "Inventory", value: "No hold; order stays open pending full payment" },
      { label: "CRM", value: "Status set to partial; shortfall + new deadline calculated" },
      { label: "Finance", value: "Partial receipt logged; outstanding balance tracked as open AR" },
    ],
    communication:
      "Partial received notice + exact shortfall amount + deadline to complete. Unresolved: cancel + refund.",
    edgeCases: [
      "Customer sends second transfer covering shortfall: matched, moves to CONFIRMED",
      "Deadline passes with balance outstanding — order cancelled, received amount refunded",
    ],
  },
  confirmed_refund: {
    label: "CONFIRMED",
    labelLine2: "+ REFUND",
    sublabel: "Overpayment received",
    trigger: "Bank transfer > order total",
    variant: "teal",
    systemActions: [
      { label: "Inventory", value: "Decremented; fulfillment triggered on order amount only" },
      { label: "CRM", value: "Order confirmed; excess amount flagged for refund processing" },
      { label: "Finance", value: "Revenue recognized for order amount; excess logged as refund liability; event logged" },
    ],
    communication: "Order confirmed + refund notification for excess amount + estimated processing time.",
    edgeCases: [
      "Refund via original bank transfer method or store credit per customer preference",
      "Refund calculated at confirmed order exchange rate, not current FX rate",
    ],
  },
};

/* ── Sync states ────────────────────────────────────────────────────────────── */

const syncStates: Record<SyncStateId, StateInfo> = {
  sync_confirmed: {
    label: "CONFIRMED",
    sublabel: "Payment approved",
    trigger: "Card authorized instantly",
    variant: "teal",
    systemActions: [
      { label: "Inventory", value: "Decremented immediately on authorization" },
      { label: "CRM", value: "Order confirmed; fulfillment triggered in the same request cycle" },
      { label: "Finance", value: "Revenue recognized instantly; no deferred AR entry needed" },
    ],
    communication: "Single confirmation email: order confirmed + shipping timeline.",
    edgeCases: [
      "Card declined mid-checkout: user prompted to retry or use alternate method",
      "Authorization hold vs. capture timing: hold may lapse if fulfillment is delayed",
    ],
  },
  sync_declined: {
    label: "DECLINED",
    sublabel: "Payment rejected",
    trigger: "Card authorization failed",
    variant: "red",
    systemActions: [
      { label: "Inventory", value: "No change: item never reserved" },
      { label: "CRM", value: "Order not created; decline reason code logged" },
      { label: "Finance", value: "No AR entry; no revenue impact" },
    ],
    communication: "Decline notification with prompt to retry or use a different payment method.",
    edgeCases: [
      "Soft decline (insufficient funds) vs. hard decline (stolen card): different retry logic applies",
      "Network timeout during authorization: must void any pending hold before retrying",
    ],
  },
};

/* ── Styles ─────────────────────────────────────────────────────────────────── */

const styles = {
  teal: {
    node: "border-2 border-[#0D9488]/35 bg-teal-50/70 text-[#0D9488]",
    nodeActive: "border-2 border-[#0D9488] bg-teal-50 text-[#0D9488] shadow-md ring-2 ring-[#0D9488]/15",
    badge: "bg-teal-50 text-[#0D9488] border border-[#0D9488]/20",
  },
  amber: {
    node: "border-2 border-amber-300/70 bg-amber-50/70 text-amber-700",
    nodeActive: "border-2 border-amber-400 bg-amber-50 text-amber-800 shadow-md ring-2 ring-amber-200",
    badge: "bg-amber-50 text-amber-700 border border-amber-200",
  },
  slate: {
    node: "border-2 border-slate-300/70 bg-slate-100/60 text-slate-500",
    nodeActive: "border-2 border-slate-400 bg-slate-100 text-slate-600 shadow-md ring-2 ring-slate-200",
    badge: "bg-slate-100 text-slate-600 border border-slate-200",
  },
  red: {
    node: "border-2 border-red-200/70 bg-red-50/60 text-red-500",
    nodeActive: "border-2 border-red-400 bg-red-50 text-red-600 shadow-md ring-2 ring-red-200",
    badge: "bg-red-50 text-red-600 border border-red-200",
  },
};

const ASYNC_OUTCOMES: StateId[] = ["confirmed", "partial", "expired", "confirmed_refund"];
const SYNC_OUTCOMES: SyncStateId[] = ["sync_confirmed", "sync_declined"];

/* ── Component ──────────────────────────────────────────────────────────────── */

export default function PaymentStateDiagram() {
  const [tab, setTab] = useState<Tab>("async");
  const [activeAsync, setActiveAsync] = useState<StateId | null>("confirmed");
  const [activeSync, setActiveSync] = useState<SyncStateId | null>("sync_confirmed");

  const toggleAsync = (id: StateId) => setActiveAsync((p) => (p === id ? null : id));
  const toggleSync = (id: SyncStateId) => setActiveSync((p) => (p === id ? null : id));

  const asyncDetail = activeAsync ? asyncStates[activeAsync] : null;
  const syncDetail = activeSync ? syncStates[activeSync] : null;

  return (
    <div className="w-full select-none">

      {/* ── Tab toggle ─────────────────────────────────────────────────── */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setTab("sync")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            tab === "sync"
              ? "bg-gray-800 text-white shadow-sm"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          Sync: Card Payment
        </button>
        <button
          onClick={() => setTab("async")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            tab === "async"
              ? "bg-gray-800 text-white shadow-sm"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          Async: Konbini / Bank Transfer
        </button>
        {tab === "async" && (
          <span className="ml-1 self-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-[#0D9488]/10 text-[#0D9488]">
            This project
          </span>
        )}
      </div>

      {/* ── SYNC diagram ───────────────────────────────────────────────── */}
      {tab === "sync" && (
        <div>
          {/* Context callout */}
          <div className="mb-6 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">How our US system worked</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Card payments resolve instantly. The entire order system (inventory, CRM, finance) was built assuming
              a synchronous response within the same request cycle.
            </p>
          </div>

          {/* Entry */}
          <div className="flex justify-center">
            <div className="border-2 border-gray-200 bg-gray-50 rounded-lg px-6 py-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-0.5">Entry</p>
              <p className="text-sm font-bold text-gray-600">Order Created</p>
            </div>
          </div>
          <Connector vertical center />

          {/* Single step */}
          <div className="flex justify-center">
            <div className="border-2 border-blue-200 bg-blue-50/60 rounded-lg px-8 py-3 text-center">
              <p className="text-[10px] text-blue-400 mb-0.5 font-medium uppercase tracking-widest">Instant</p>
              <p className="text-sm font-bold text-blue-700">Card Authorization</p>
              <p className="text-[10px] text-blue-400 mt-0.5">Response in &lt;2 seconds</p>
            </div>
          </div>

          {/* Branch */}
          <div className="relative h-10 hidden md:block" aria-hidden>
            <div style={{ position: "absolute", left: "50%", top: 0, width: 1, height: "50%", background: "#E5E7EB", transform: "translateX(-0.5px)" }} />
            <div style={{ position: "absolute", left: "25%", right: "25%", top: "50%", height: 1, background: "#E5E7EB" }} />
            {[25, 75].map((l) => (
              <div key={l} style={{ position: "absolute", left: `${l}%`, top: "50%", width: 1, height: "50%", background: "#E5E7EB", transform: "translateX(-0.5px)" }} />
            ))}
          </div>
          <Connector vertical center className="md:hidden" />

          {/* Direction hint */}
          <div className="flex justify-end mb-2">
            <p className="text-[11px] text-gray-400 italic">Click any outcome to see system actions and edge cases</p>
          </div>

          {/* Sync outcomes */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-24">
            {SYNC_OUTCOMES.map((id) => {
              const s = syncStates[id];
              const v = styles[s.variant];
              const isActive = activeSync === id;
              return (
                <button
                  key={id}
                  onClick={() => toggleSync(id)}
                  className={`rounded-lg px-4 py-3 text-center w-full transition-all duration-200 hover:shadow-md ${
                    isActive ? v.nodeActive : v.node
                  }`}
                >
                  <p className="text-[10px] opacity-55 mb-1 leading-tight">{s.trigger}</p>
                  <p className="font-bold text-sm leading-tight">{s.label}</p>
                  <p className="text-[10px] opacity-55 mt-1">{s.sublabel}</p>
                  <p className="text-[10px] opacity-40 mt-1.5">{isActive ? "click to close ↑" : "click to explore →"}</p>
                </button>
              );
            })}
          </div>

          {/* Sync detail panel */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              syncDetail ? "max-h-[600px] mt-5" : "max-h-0"
            }`}
          >
            {syncDetail && activeSync && (
              <DetailPanel
                state={syncStates[activeSync]}
                variant={syncStates[activeSync].variant}
                onClose={() => setActiveSync(null)}
              />
            )}
          </div>

          {/* Contrast note */}
          <div className="mt-6 border border-dashed border-amber-300 bg-amber-50/40 rounded-xl px-5 py-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">Why Japan broke this</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Konbini and bank transfer don&apos;t return a synchronous response. Confirmation can take hours to days,
              which meant every assumption above had to be redesigned.{" "}
              <button
                onClick={() => setTab("async")}
                className="text-[#0D9488] font-medium underline underline-offset-2 hover:opacity-75 transition-opacity"
              >
                See the async flow →
              </button>
            </p>
          </div>
        </div>
      )}

      {/* ── ASYNC diagram ──────────────────────────────────────────────── */}
      {tab === "async" && (
        <div>
          {/* Context callout */}
          <div className="mb-6 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">What we had to design for Japan</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Payment confirmation is decoupled from order creation. The system must handle every possible
              outcome, including ones that never exist in a sync flow.
            </p>
          </div>

          {/* Entry */}
          <div className="flex justify-center">
            <div className="border-2 border-gray-200 bg-gray-50 rounded-lg px-6 py-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-0.5">Entry</p>
              <p className="text-sm font-bold text-gray-600">Order Created</p>
            </div>
          </div>
          <Connector vertical center />

          {/* PENDING */}
          <div className="flex justify-center">
            <StateButton id="pending" active={activeAsync === "pending"} onToggle={toggleAsync} />
          </div>

          {/* Branch connector */}
          <div className="relative h-10 hidden md:block" aria-hidden>
            <div style={{ position: "absolute", left: "50%", top: 0, width: 1, height: "50%", background: "#E5E7EB", transform: "translateX(-0.5px)" }} />
            <div style={{ position: "absolute", left: "12.5%", right: "12.5%", top: "50%", height: 1, background: "#E5E7EB" }} />
            {[12.5, 37.5, 62.5, 87.5].map((l) => (
              <div key={l} style={{ position: "absolute", left: `${l}%`, top: "50%", width: 1, height: "50%", background: "#E5E7EB", transform: "translateX(-0.5px)" }} />
            ))}
          </div>
          <Connector vertical center className="md:hidden" />

          {/* Direction hint */}
          <div className="flex justify-end mb-2">
            <p className="text-[11px] text-gray-400 italic">Click any outcome to see system actions and edge cases</p>
          </div>

          {/* Async outcomes */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {ASYNC_OUTCOMES.map((id) => (
              <StateButton key={id} id={id} active={activeAsync === id} onToggle={toggleAsync} />
            ))}
          </div>

          {/* Async detail panel */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              asyncDetail ? "max-h-[700px] mt-5" : "max-h-0"
            }`}
          >
            {asyncDetail && activeAsync && (
              <DetailPanel
                state={asyncStates[activeAsync]}
                variant={asyncStates[activeAsync].variant}
                onClose={() => setActiveAsync(null)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Shared detail panel ────────────────────────────────────────────────────── */

function DetailPanel({
  state,
  variant,
  onClose,
}: {
  state: StateInfo;
  variant: "teal" | "amber" | "slate" | "red";
  onClose: () => void;
}) {
  const v = styles[variant];
  return (
    <div className="border border-gray-200 rounded-xl bg-white p-5 md:p-6">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${v.badge}`}>
            {state.label}{state.labelLine2 ? " " + state.labelLine2 : ""}
          </span>
          <p className="text-xs text-gray-400">{state.trigger}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-gray-500 transition-colors text-base leading-none ml-4"
          aria-label="Close detail panel"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">System Actions</p>
          <div className="space-y-3">
            {state.systemActions.map((a) => (
              <div key={a.label}>
                <p className="text-xs font-semibold text-gray-700">{a.label}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{a.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Customer Communication</p>
          <p className="text-xs text-gray-600 leading-relaxed">{state.communication}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Edge Cases</p>
          <ul className="space-y-2">
            {state.edgeCases.map((ec, i) => (
              <li key={i} className="text-xs text-gray-600 leading-relaxed flex gap-2 items-start">
                <span className="text-gray-300 shrink-0 mt-0.5">→</span>
                {ec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────────── */

function StateButton({
  id,
  active,
  onToggle,
}: {
  id: StateId;
  active: boolean;
  onToggle: (id: StateId) => void;
}) {
  const s = asyncStates[id];
  const v = styles[s.variant];
  return (
    <button
      onClick={() => onToggle(id)}
      className={`rounded-lg px-4 py-3 text-center w-full transition-all duration-200 hover:shadow-md ${
        active ? v.nodeActive : v.node
      }`}
    >
      <p className="text-[10px] opacity-55 mb-1 leading-tight">{s.trigger}</p>
      <p className="font-bold text-sm leading-tight">{s.label}</p>
      {s.labelLine2 && <p className="font-bold text-sm leading-tight">{s.labelLine2}</p>}
      <p className="text-[10px] opacity-55 mt-1">{s.sublabel}</p>
      <p className="text-[10px] opacity-40 mt-1.5">{active ? "click to close ↑" : "click to explore →"}</p>
    </button>
  );
}

function Connector({
  vertical,
  center,
  className = "",
}: {
  vertical?: boolean;
  center?: boolean;
  className?: string;
}) {
  if (vertical && center) {
    return (
      <div className={`flex justify-center ${className}`}>
        <div style={{ width: 1, height: 24, background: "#E5E7EB" }} />
      </div>
    );
  }
  return null;
}
