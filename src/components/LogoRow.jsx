import React from "react";
import { SiFigma, SiFramer, SiNotion, SiWix } from "react-icons/si";
import { LuFlame } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";

const items = [
  { icon: <SiFramer />, label: "Framer" },
  { icon: <LuFlame />, label: "Proto" },
  { icon: <SiWix />, label: "W" },
  { icon: <TbBrandSpeedtest />, label: "Perf" },
  { icon: <SiNotion />, label: "Notion" },
  { icon: <SiFigma />, label: "Figma" },
];

export function LogoRow() {
  return (
    <div className="mx-auto mt-12 logo-container">
      <div className="logo-scroll flex gap-4">
        {[...items, ...items, ...items].map((it, i) => (
          <div
            key={i}
            className="card flex items-center justify-center rounded-2xl p-6 text-2xl min-w-[120px] flex-shrink-0"
            title={it.label}
          >
            {it.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
