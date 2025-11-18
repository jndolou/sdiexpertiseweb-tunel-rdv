import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { AppointmentConfirmationSection } from "./sections/AppointmentConfirmationSection";
import { DateSelectionSection } from "./sections/DateSelectionSection";
import { DiagnosticsSection } from "./sections/DiagnosticsSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PaymentOptionsSection } from "./sections/PaymentOptionsSection";
import { ProgressIndicatorSection } from "./sections/ProgressIndicatorSection";
import { UserInfoSection } from "./sections/UserInfoSection";

const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
};

const generateCalendarDates = (
  year: number,
  month: number
): Array<{ date: number | null; isCurrentMonth: boolean }[]> => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);

  const weeks: Array<{ date: number | null; isCurrentMonth: boolean }[]> = [];
  let currentWeek: { date: number | null; isCurrentMonth: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    currentWeek.push({
      date: daysInPrevMonth - i,
      isCurrentMonth: false,
    });
  }

  for (let date = 1; date <= daysInMonth; date++) {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push({ date, isCurrentMonth: true });
  }

  let nextMonthDate = 1;
  while (currentWeek.length < 7) {
    currentWeek.push({ date: nextMonthDate++, isCurrentMonth: false });
  }
  weeks.push(currentWeek);

  while (weeks.length < 5) {
    const week: { date: number | null; isCurrentMonth: boolean }[] = [];
    for (let i = 0; i < 7; i++) {
      week.push({ date: nextMonthDate++, isCurrentMonth: false });
    }
    weeks.push(week);
  }

  return weeks;
};

export const Commande = (): JSX.Element => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const calendarWeeks = generateCalendarDates(currentYear, currentMonth);

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (date: number | null, isCurrentMonth: boolean) => {
    if (date && isCurrentMonth) {
      const newDate = new Date(currentYear, currentMonth, date);
      setSelectedDate(newDate);
    }
  };

  const isDateSelected = (date: number | null, isCurrentMonth: boolean): boolean => {
    if (!date || !isCurrentMonth || !selectedDate) return false;
    return (
      selectedDate.getDate() === date &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };
  return (
    <div className="overflow-hidden [background:url(..//commande-9.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-screen flex flex-col relative">
      <header className="flex z-[4] w-full items-center justify-between pt-[50px] pb-4 px-4 fixed top-0 left-0 rounded-[0px_0px_16px_16px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_16px_16px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-[170px] h-8 object-cover"
            alt="Logo horizontal"
            src="/logo-horizontal-condense--violet-fonce--2x-1.png"
          />
        </div>

        <div className="flex items-center justify-end gap-2 relative flex-1 grow">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-[62px]"
          >
            <UserIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-[62px]"
          >
            <ShoppingCartIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-[#faf8fc] rounded-[62px] shadow-[3.63e-16px_5.93px_11.87px_#33333324,inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb]"
          >
            <MoreHorizontalIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>

      <main className="flex flex-col w-full pt-[110px]">
        <DiagnosticsSection />

        <section className="z-[3] w-full px-4 py-4 relative">
          <div className="w-full rounded-xl border border-solid border-[#aa7ffb] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] p-4">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 p-0 hover:bg-transparent"
                onClick={goToPreviousMonth}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>

              <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px]">
                {monthNames[currentMonth]} {currentYear}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 p-0 hover:bg-transparent"
                onClick={goToNextMonth}
              >
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex justify-between mb-3 px-2">
              {weekDays.map((day, index) => (
                <div
                  key={`weekday-${index}`}
                  className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-xs tracking-[0] leading-[14.3px] min-w-[32px] text-center"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="border-t border-[#d1d1d1] mb-3"></div>

            <div className="flex flex-col gap-3">
              {calendarWeeks.map((week, weekIndex) => (
                <React.Fragment key={`week-${weekIndex}`}>
                  <div className="flex justify-between items-center px-2">
                    {week.map((day, dayIndex) => (
                      <button
                        key={`date-${weekIndex}-${dayIndex}`}
                        onClick={() =>
                          handleDateClick(day.date, day.isCurrentMonth)
                        }
                        disabled={!day.isCurrentMonth}
                        className={`[font-family:'Open_Sans',Helvetica] font-normal text-base tracking-[0] leading-[20px] min-w-[32px] h-[32px] flex items-center justify-center transition-colors ${
                          isDateSelected(day.date, day.isCurrentMonth)
                            ? "bg-[#c1a0ff] rounded-[10px] text-[#1c1b1b]"
                            : day.isCurrentMonth
                            ? "text-[#1c1b1b] hover:bg-[#e8e0f5] rounded-[10px] cursor-pointer"
                            : "text-[#9e9e9e] cursor-default"
                        }`}
                      >
                        {day.date}
                      </button>
                    ))}
                  </div>
                  {weekIndex < calendarWeeks.length - 1 && (
                    <div className="border-t border-[#d1d1d1]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex w-full relative flex-col items-start gap-12 pt-12 pb-32 px-8 bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[219px] h-[60px] object-cover"
              alt="Logo principal"
              src="/logo-principal-violet-7c5ed6-2x-1.png"
            />
          </div>

          <AppointmentConfirmationSection />
          <NavigationSection />
          <UserInfoSection />
          <DateSelectionSection />
          <ProgressIndicatorSection />
          <PaymentOptionsSection />
        </footer>
      </main>
    </div>
  );
};
