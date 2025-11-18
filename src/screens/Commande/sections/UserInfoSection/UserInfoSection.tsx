import React from "react";
import { Button } from "../../../../components/ui/button";

export const UserInfoSection = (): JSX.Element => {
  return (
    <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
      <Button
        variant="outline"
        className="h-12 px-4 py-3 rounded-[62px] border-none shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
      >
        <span className="relative [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
          Contactez-nous
        </span>
      </Button>

      <Button className="h-12 px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]">
        <span className="relative [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
          Obtenir un devis
        </span>
      </Button>
    </div>
  );
};
