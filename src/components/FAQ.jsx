import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const faqs = [
  {
    q: "What is your design process?",
    a: "Discovery, research, ideation, low-fi to hi-fi prototyping, validation with users, then handoff and iteration.",
  },
  {
    q: "What tools and software do you use for UX design?",
    a: "Figma, Framer, Notion, FigJam, and a stack of dev tools for quick protos.",
  },
  {
    q: "How do you measure the success of your UX designs?",
    a: "North-star metrics plus leading indicators like task success, time-on-task, CSAT, NPS, and retention.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="mt-24 pb-24">
      <h2 className="mb-8 text-3xl font-semibold text-white">
        Frequently asked questions
      </h2>
      <div className="rounded-3xl border border-white/10">
        {faqs.map((f, i) => {
          const active = open === i;
          return (
            <div key={f.q} className="border-b border-white/10 last:border-b-0">
              <button
                onClick={() => setOpen(active ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className="text-zinc-200">{f.q}</span>
                <FiChevronRight
                  className={`h-5 w-5 text-zinc-400 transition ${
                    active ? "rotate-90" : ""
                  }`}
                />
              </button>
              {active && (
                <div className="px-6 pb-5 text-sm text-zinc-400">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
