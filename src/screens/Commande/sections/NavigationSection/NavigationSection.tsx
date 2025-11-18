import { ShoppingCartIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  {
    icon: UserIcon,
    label: "Mon Espace",
  },
  {
    icon: ShoppingCartIcon,
    label: "Mon Panier",
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <nav className="flex items-start justify-between w-full">
      {navigationItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="inline-flex items-center gap-1.5 p-0 h-auto hover:bg-transparent"
        >
          <item.icon className="w-4 h-4" />
          <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
            {item.label}
          </span>
        </Button>
      ))}
    </nav>
  );
};
