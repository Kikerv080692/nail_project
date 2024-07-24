import moment from "moment";
import { array } from "prop-types";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { CalendarDays } from "../CalendarDays/CalendarDays";

export const CalendarGrid = ({ today, startDay }) => {
  
  const totalDays = 30;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  console.log("day", daysArray);

  const isCurrentDay = () => {
    return moment().isSame(day, "day");
  };
  console.log("currentDay", isCurrentDay);
  const isSelectedMonth = () => {
    return moment().isSame(month, "month");
  };


  return (
    <div>
      <ul>
        {[...Array(7)].map((_, index) => (
          <li key={index}>
            <span>
              {moment()
                .day(index + 1)
                .format("ddd")
                .toUpperCase()}
            </span>
          </li>
        ))}
      </ul>
      <div>
        {daysArray.map((dayItem) => (
          <CalendarDays isCurrentDay={isCurrentDay} dayItem={dayItem} />
        ))}
      </div>
    </div>
  );
};
