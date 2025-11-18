import { ChevronRightIcon } from "lucide-react";
import React from "react";

const menuItems = [
  { label: "Page principale", hasChevron: false },
  { label: "Accès pro", hasChevron: false },
  { label: "Plan du site", hasChevron: false },
  { label: "Zones d'interventions", hasChevron: true },
  { label: "Tous nos services", hasChevron: true },
  { label: "Ordre de mission", hasChevron: false },
  { label: "Mon projet", hasChevron: false },
  { label: "Ressources", hasChevron: false },
  { label: "Actualités", hasChevron: false },
  { label: "Qui sommes nous ?", hasChevron: false },
];

export const AppointmentConfirmationSection = (): JSX.Element => {
  return (
    <nav className="flex flex-col items-start gap-6 w-full">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center gap-1.5 flex-1">
            <div className="w-fit mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
              {item.label}
            </div>
          </div>
          {item.hasChevron && (
            <ChevronRightIcon className="w-4 h-4 text-dark" />
          )}
        </div>
      ))}
    </nav>
  );
};
