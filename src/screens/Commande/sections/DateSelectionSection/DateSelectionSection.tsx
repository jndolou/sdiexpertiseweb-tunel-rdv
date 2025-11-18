import { BanknoteIcon, ZapIcon } from "lucide-react";
import React from "react";

const items = [
  {
    icon: "flash",
    text: "Simuler mon DPE",
    IconComponent: ZapIcon,
  },
  {
    icon: "cash",
    text: "Estimer la valeur de mon bien",
    IconComponent: BanknoteIcon,
  },
];

export const DateSelectionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center gap-[23px] w-full">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <item.IconComponent className="w-5 h-5 flex-shrink-0" />
          <div className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
            {item.text}
          </div>
        </div>
      ))}
    </section>
  );
};
