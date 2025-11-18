import React from "react";
import { Button } from "../../../../components/ui/button";

export const PaymentOptionsSection = (): JSX.Element => {
  const links = [
    { label: "Mentions légales" },
    { label: "Cookies" },
    { label: "CGV" },
  ];

  return (
    <footer className="flex flex-col items-center gap-4 w-full">
      <nav className="flex items-center justify-center gap-4">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <Button
              variant="link"
              className="h-auto p-0 font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]"
            >
              {link.label}
            </Button>
            {index < links.length - 1 && (
              <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px]">
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
        ©2025 SDIExpertise®
      </div>
    </footer>
  );
};
