import React from "react";

const cases = [
  {
    title: "Revamping an E-Commerce Website",
    blurb:
      "Focus was to create a user-friendly interface that simplified access to premium operational web scraping proxies.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    metrics: [
      { k: "Usability", v: "85%" },
      { k: "User Retention", v: "70%" },
    ],
    glowColor: "bg-red-500/20",
    shadowColor: "shadow-red-500/30",
  },
  {
    title: "Developing a Mobile Health Tracking App",
    blurb:
      "Leading Bitcoin Data and Stats site. Live price action, on-chain data, and key indicators.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    metrics: [
      { k: "Conversion Rate", v: "12%" },
      { k: "User Satisfaction", v: "4.8*" },
    ],
    glowColor: "bg-blue-500/20",
    shadowColor: "shadow-blue-500/30",
  },
  {
    title: "Building a SaaS Analytics Platform",
    blurb:
      "Comprehensive analytics dashboard for businesses to track performance metrics and user engagement across multiple channels.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    metrics: [
      { k: "Data Processing", v: "99.9%" },
      { k: "Load Time", v: "<2s" },
    ],
    glowColor: "bg-green-500/20",
    shadowColor: "shadow-green-500/30",
  },
  {
    title: "Creating an AI-Powered Content Platform",
    blurb:
      "Revolutionary content creation platform leveraging AI to generate, optimize, and distribute engaging content at scale.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    metrics: [
      { k: "Content Quality", v: "95%" },
      { k: "Time Saved", v: "80%" },
    ],
    glowColor: "bg-purple-500/20",
    shadowColor: "shadow-purple-500/30",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="mt-20 relative">
      <div className="space-y-0">
        {cases.map((c, idx) => (
          <article 
            key={idx}
            className="case-study-item bg-black/70 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden"
          >
            <div className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">{c.title}</h3>
                <p className="text-zinc-400">{c.blurb}</p>
                <div className="flex flex-wrap gap-8 pt-2 text-zinc-300">
                  {c.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="text-xs uppercase tracking-wide text-zinc-500">
                        {m.k}
                      </div>
                      <div className="text-2xl font-semibold">{m.v}</div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10">
                  View case study
                </button>
              </div>
              <div className="relative">
                <div className={`absolute -inset-8 rounded-2xl ${c.glowColor} blur-3xl opacity-50`}></div>
                <div className={`absolute -inset-4 rounded-2xl ${c.glowColor} blur-xl opacity-30`}></div>
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-64 w-full rounded-2xl object-cover md:h-full relative z-10"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}