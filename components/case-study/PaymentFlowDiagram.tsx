"use client";
import { useState } from "react";
import React from "react";

const players = [
  { id: "cardholder", label: "Cardholder", desc: "Pays with a card" },
  { id: "merchant", label: "Merchant", desc: "Accepts the payment (e.g. Starbucks)" },
  { id: "psp", label: "PSP / Gateway", desc: "Abstracts card infrastructure into an API (e.g. Stripe, Adyen)" },
  { id: "acquirer", label: "Acquirer", desc: "Merchant's bank; holds Card Network membership, handles settlement" },
  { id: "network", label: "Card Network", desc: "Routes messages, sets rules (e.g. Visa, Mastercard)" },
  { id: "issuer", label: "Issuer", desc: "Cardholder's bank; makes the final approve/decline decision (e.g. Chase, Shinhan)" },
];

export default function PaymentFlowDiagram() {
  const [active, setActive] = useState<string | null>("cardholder");
  const activePlayer = players.find((p) => p.id === active);

  return (
    <div>
      {/* Flow row */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        {players.map((p, i) => (
          <React.Fragment key={p.id}>
            <button
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === p.id ? null : p.id)}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer"
              style={
                active === p.id
                  ? { backgroundColor: "#0D9488", color: "#fff", borderColor: "#0D9488" }
                  : { backgroundColor: "#fff", color: "#0F0F0F", borderColor: "#e5e7eb" }
              }
            >
              {p.label}
            </button>
            {i < players.length - 1 && (
              <span className="text-gray-300 text-sm select-none">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Description panel */}
      <div
        className="transition-all duration-200 overflow-hidden"
        style={{ minHeight: "3rem" }}
      >
        {activePlayer && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-2">
            <p className="text-sm text-ink/65">
              <span className="font-semibold text-ink">{activePlayer.label}:</span>{" "}
              {activePlayer.desc}
            </p>
          </div>
        )}
        <p className="text-xs text-ink/30 italic">Hover or tap any node to see its role</p>
      </div>
    </div>
  );
}
