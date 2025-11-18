import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { CustomCalendar } from "../../../../components/CustomCalendar";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";

const progressSteps = [
  { label: "Infos\nlogement", active: true },
  { label: "Coordonnées", active: true },
  { label: "Rendez-vous", active: true },
  { label: "Paiement", active: false },
];

const formatDate = (date: Date | undefined): string => {
  if (!date) return "";

  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${dayName} ${day} ${month}`;
};

export const DiagnosticsSection = (): JSX.Element => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 6, 10));
  const [isExpressChecked, setIsExpressChecked] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setIsPopoverOpen(false);
  };

  return (
    <section className="flex w-full flex-col items-center gap-[9px] px-4 py-8 rounded-2xl overflow-hidden">
      <div className="flex flex-col items-start gap-[30px] w-full">
        <div className="flex flex-col items-end gap-[23px] w-full">
          <div className="flex flex-col items-start gap-[22px] w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-end gap-[21px] w-full">
                <div className="flex flex-wrap items-start gap-[12px_10px] w-full">
                  <nav className="inline-flex items-start gap-[9px]">
                    {progressSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`relative ${index === 0 ? "w-[74px]" : index === 1 ? "w-[95px]" : index === 2 ? "w-[91px]" : "w-[74px]"} ${index === 0 ? "h-[27px]" : "h-[13px]"} mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold ${step.active ? "text-[#1c1b1b]" : "text-[#a6a6a7]"} text-xs tracking-[0] leading-[13.8px] ${index > 1 ? "whitespace-nowrap" : ""}`}
                      >
                        {step.label}
                      </div>
                    ))}
                  </nav>

                  <div className="flex flex-col w-[361px] h-1.5 items-start gap-2.5 bg-[#ede4ff] border-[0.5px] border-solid border-[#875fda]">
                    <div className="relative w-[285px] h-1.5 bg-[#875fda]" />
                  </div>
                </div>
              </div>

              <h2 className="w-[361px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
                Votre rendez-vous :
              </h2>

              <div className="inline-flex flex-col items-end gap-[13px]">
                <div className="w-[361px] gap-1.5 flex flex-col items-start">
                  <label className="w-[325px] mt-[-1.00px] z-[1] [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                    Sélectionnez une date
                  </label>

                  <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                    <PopoverTrigger asChild>
                      <div className="flex flex-col items-start gap-0.5 w-full z-0">
                        <div className="flex flex-col items-start gap-1 w-full">
                          <div className="flex items-start gap-2 pl-3 pr-2 py-0 w-full rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer">
                            <div className="flex flex-col h-11 items-start justify-center px-0 py-1.5 flex-1 grow rounded overflow-hidden">
                              <div className="flex items-start w-full">
                                <div className="w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5 whitespace-nowrap">
                                  {date ? formatDate(date) : "Sélectionnez une date"}
                                </div>
                              </div>
                            </div>

                            <div className="inline-flex items-center">
                              <div className="inline-flex items-start pl-1 pr-0 py-0">
                                <CalendarIcon className="w-6 h-6 text-[#1c1b1b80]" />
                              </div>

                              <div className="inline-flex items-start pl-1 pr-0 py-0 overflow-hidden">
                                <div className="w-px h-6" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-[361px] p-0 rounded-xl border border-solid border-[#aa7ffb] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)]"
                      align="start"
                    >
                      <CustomCalendar selected={date} onSelect={handleDateSelect} />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-end gap-[83px] mb-[-1.00px]">
            <div className="flex flex-col w-[360px] items-start gap-[27px]">
              <div className="inline-flex flex-col items-start gap-4 mr-[-1.00px] w-full">
                <h3 className="w-[361px] mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
                  Choisissez un créneaux :
                </h3>

                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex items-start justify-between w-full">
                    <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                      Créneaux standard
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                        Créneaux express
                      </div>
                      <div className="inline-flex h-[18px] items-center justify-center gap-[5px] px-2 py-1.5 bg-[#aa7ffb] rounded-[62px] overflow-hidden">
                        <div className="[font-family:'Open_Sans',Helvetica] font-bold text-[#f3f1f5] text-[10px] tracking-[0] leading-[13px] whitespace-nowrap">
                          + 25€
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 w-full">
                    <div className="flex flex-col w-[177px] items-start gap-2.5">
                      <button
                        onClick={() => setSelectedSlot("9h-11h")}
                        className={`flex items-center justify-center h-[60px] w-full rounded-2xl border-2 transition-all ${
                          selectedSlot === "9h-11h"
                            ? "bg-[#c1a0ff] border-[#875fda]"
                            : "bg-white border-[#875fda]"
                        }`}
                      >
                        <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                          9h - 11h
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedSlot("11h-13h")}
                        className={`flex items-center justify-center h-[60px] w-full rounded-2xl border-2 transition-all ${
                          selectedSlot === "11h-13h"
                            ? "bg-[#c1a0ff] border-[#875fda]"
                            : "bg-white border-[#875fda]"
                        }`}
                      >
                        <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                          11 - 13h
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedSlot("15h-17h")}
                        className={`flex items-center justify-center h-[60px] w-full rounded-2xl border-2 transition-all ${
                          selectedSlot === "15h-17h"
                            ? "bg-[#c1a0ff] border-[#875fda]"
                            : "bg-white border-[#875fda]"
                        }`}
                      >
                        <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                          15 - 17h
                        </span>
                      </button>
                    </div>

                    <div className="flex flex-col w-[177px] items-start gap-2.5">
                      <button
                        onClick={() => setSelectedSlot("7h-9h")}
                        className={`flex items-center justify-center h-[60px] w-full rounded-2xl border-2 transition-all ${
                          selectedSlot === "7h-9h"
                            ? "bg-[#c1a0ff] border-[#875fda]"
                            : "bg-white border-[#875fda]"
                        }`}
                      >
                        <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                          7h - 9h
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedSlot("17h30-20h")}
                        className={`flex items-center justify-center h-[60px] w-full rounded-2xl border-2 transition-all ${
                          selectedSlot === "17h30-20h"
                            ? "bg-[#c1a0ff] border-[#875fda]"
                            : "bg-white border-[#875fda]"
                        }`}
                      >
                        <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                          17h 30 - 20h
                        </span>
                      </button>

                      <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                        Des créneaux réservés à nos clients express pour aller plus vite, tôt le matin ou en soirée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[363px] h-[135px] items-start justify-center gap-[15px] pl-[19px] pr-2.5 py-2.5 mb-[-1.00px] ml-[-1.00px] mr-[-2.00px] bg-[#efe7ff] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <div className="flex flex-col h-[94px] items-start gap-[3px] w-full">
                  <div className="flex h-[53px] items-center gap-2.5 w-full">
                    <Checkbox
                      checked={isExpressChecked}
                      onCheckedChange={(checked) =>
                        setIsExpressChecked(checked as boolean)
                      }
                      className="w-2.5 h-2.5 border border-solid border-[#5d3ca4] data-[state=checked]:bg-[#5d3ca4]"
                    />

                    <label className="w-[302px] h-[38px] [font-family:'Ubuntu',Helvetica] font-bold text-transparent text-base tracking-[0] leading-[19.2px] cursor-pointer">
                      <span className="text-black">
                        Je veux mon rapport sous 24h (option express){" "}
                      </span>
                      <span className="text-[#5d3ca4]">- 50€</span>
                    </label>
                  </div>

                  <p className="h-[38px] [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px]">
                    Gagnez du temps, le rapport vous est envoyé par email
                    sécurisé le jour même de l&#39;intervention.
                  </p>
                </div>
              </div>
            </div>

            <Button className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0eef2]">
              <span className="w-[146px] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                Payer et confirmer
              </span>
              <ArrowRightIcon className="w-6 h-6 text-[#1c1b1b]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
