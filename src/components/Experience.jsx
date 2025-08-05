import React from "react";

const roles = [
  { role: "Design Lead", org: "Geonode", period: "Jan 2020 - Jan 2023" },
  { role: "Lead UX/UI Designer", org: "Truely", period: "Jan 2018 - Jan 2020" },
  { role: "Design Director", org: "Nicey Studio", period: "Jun 2016 - Present" },
  { role: "Co-Founder", org: "BrandingMag", period: "Jan 2011 - Jun 2015" },
];

export function Experience() {
  return (
    <section id="experience" className="mt-24">
      <h2 className="mb-8 text-3xl font-semibold text-white">Experience</h2>
      <div className="divide-y divide-white/10 rounded-3xl border border-white/10">
        {roles.map((r) => (
          <div
            key={r.role}
            className="grid grid-cols-1 items-center gap-4 px-6 py-6 md:grid-cols-3"
          >
            <div className="text-white">{r.role}</div>
            <div className="text-zinc-300">{r.org}</div>
            <div className="text-zinc-500 md:text-right">{r.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
