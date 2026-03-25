"use client";

import { useState } from "react";

interface Decision {
  category: string;
  what: string;
  why: string;
  deepDive: string;
}

const decisions: Decision[] = [
  {
    category: "Inventory",
    what: "No hold, 2-day cancel window",
    why: "High LTV, high repeat-purchase segment: cancel rate data confirmed stockout collision risk was within acceptable range",
    deepDive:
      "Our customer base turned over frequently: nail products weekly, skincare on short reorder cycles. Holding inventory pre-confirmation would have degraded the experience for our most loyal buyers. We validated with historical cancel rate data that the risk of a stockout collision (another buyer purchasing the held item before payment cleared) was low enough to accept. We also designed inventory release and order cancellation as a single atomic operation. If handled separately, the gap between cancellation and inventory release creates a phantom inventory state that can cause oversell on high-demand items.",
  },
  {
    category: "Communication",
    what: "3-stage customer touchpoints",
    why: "Pending is not broken: Japanese consumers are familiar with Konbini flows; silence after an order is the failure mode, not the wait",
    deepDive:
      "The risk wasn't that customers would be confused by the payment method (Konbini is widely understood in Japan). The risk was silence after placing an order. We designed three explicit touchpoints: (1) immediate post-order confirmation with payment instructions and deadline, (2) 24-hour reminder if unpaid, (3) final warning 2 hours before expiry. Each message framed the pending state as intentional and informative. This pattern maps directly to ACH-based payment UX in the US, where delayed confirmation is expected and the PM's job is to make waiting feel designed, not broken.",
  },
  {
    category: "Idempotency",
    what: "Unique event ID per confirmation webhook",
    why: "Payment provider webhooks can fire more than once due to retries; a duplicate trigger without idempotency handling double-fulfills an order",
    deepDive:
      "Konbini confirmation signals can be retried by the payment provider on network timeouts or delivery failures. Without idempotency handling, a duplicate confirmation event would trigger a second fulfillment cycle: inventory decremented twice, duplicate shipment created, two finance entries for the same revenue. Each confirmation event was assigned a unique identifier at the provider level; subsequent events with the same ID were silently ignored after first successful processing. This is standard in payments engineering: the PM's role was to specify the requirement explicitly, define the acceptance criteria, and ensure edge case coverage in QA.",
  },
  {
    category: "Partial Payment",
    what: "State-based logic per edge case scenario",
    why: "Bank transfers rely on customers manually entering amounts; shortfalls are predictable, so defining handling upfront avoids ambiguity at resolution time",
    deepDive:
      "Manual bank transfer creates a class of edge cases that card payments don't have: underpayments, overpayments, and transfers with no order reference. We defined handling logic for each scenario before launch in collaboration with finance: partial payment → notify customer + request remainder within a window, if unresolved → cancel + refund received amount. Overpayment → confirm order + refund excess. Unmatched transfer (no order ID) → amount-based matching attempt, then CS exception workflow. Pre-defining these cases meant no ambiguity at resolution time and no ad-hoc decisions under operational pressure.",
  },
  {
    category: "Reconciliation",
    what: "All payment states mapped to reconciliation events",
    why: "Finance needs real-time AR visibility: post-launch manual cross-reference creates errors, delays, and audit risk",
    deepDive:
      "Every state transition (pending, confirmed, expired, refunded, partial, overpaid) was mapped to a tagged reconciliation event that finance could query directly. Before this, end-of-month reconciliation required manual cross-reference between order records and bank statements. After mapping, finance could filter by state, drill into any order, and trace the full payment history in real time. Aligning on the event schema at design time (not post-launch) meant the data structure was correct from day one. Retroactively tagging historical records would have been expensive, error-prone, and incomplete.",
  },
];

export default function DecisionCards() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="flex justify-end mb-5">
        <button
          onClick={() => setShowDetails((p) => !p)}
          className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors border border-gray-200 rounded-full px-4 py-1.5 hover:border-gray-300"
        >
          {showDetails ? (
            <>Hide technical detail <span>↑</span></>
          ) : (
            <>Show technical detail <span>↓</span></>
          )}
        </button>
      </div>

      {/* Column headers (desktop) */}
      <div className="hidden md:grid grid-cols-[148px_1fr_1.4fr] gap-6 mb-2 px-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Decision</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">What</p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Why</p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {decisions.map((d) => (
          <div key={d.category} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
            {/* Summary row */}
            <div className="grid grid-cols-1 md:grid-cols-[148px_1fr_1.4fr] gap-4 md:gap-6 p-5 md:p-6 md:items-center">
              <div className="flex items-center">
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-md whitespace-nowrap"
                  style={{ backgroundColor: "rgba(13,148,136,0.08)", color: "#0D9488" }}
                >
                  {d.category}
                </span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1 md:hidden">What</p>
                <p className="text-sm font-medium text-ink">{d.what}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1 md:hidden">Why</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d.why}</p>
              </div>
            </div>

            {/* Deep dive */}
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                showDetails ? "max-h-[400px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 pt-0">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Technical Detail</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{d.deepDive}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
