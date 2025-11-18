import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

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

interface CustomCalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

export const CustomCalendar: React.FC<CustomCalendarProps> = ({
  selected,
  onSelect,
}) => {
  const initialDate = selected || new Date();
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());

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
    if (date && isCurrentMonth && onSelect) {
      const newDate = new Date(currentYear, currentMonth, date);
      onSelect(newDate);
    }
  };

  const isDateSelected = (
    date: number | null,
    isCurrentMonth: boolean
  ): boolean => {
    if (!date || !isCurrentMonth || !selected) return false;
    return (
      selected.getDate() === date &&
      selected.getMonth() === currentMonth &&
      selected.getFullYear() === currentYear
    );
  };

  return (
    <div className="w-full p-3">
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
                  onClick={() => handleDateClick(day.date, day.isCurrentMonth)}
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
  );
};
