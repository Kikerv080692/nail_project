import React from "react";
import "./CalendarGrid.scss";
import moment from "moment";

// import styled from "styled-components";

// const GridWrapper = styled.div `
//      display: grid;
//     grid-template-columns: repeat(7, 1fr);
//     grid-template-rows: repeat(6, 1fr);
//     gap: 10px;
//     padding: 20px 20px;
// `

function CalendarGrid({ startDay, today, totalDays, events }) {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [
    ...Array(totalDays)
      .keys()
      .map(() => {
        return day.add(1, "day").clone();
      }),
  ];

  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isCurrentMonth = (day) => today.isSame(day, "month");

  return (
    <>
      <div className="cell-wrapper-weekdays">
        {Array.from({ length: 7 }).map((_, index) => (
          <div className="wrapper-weekdays" key={index}>
            <div className="cell-wrapper-days" >
              {moment()
                .day(index + 1)
                .format("ddd")}
            </div>
          </div>
        ))}
      </div>
      <div className="container-grid">
        {daysArray.map((dayItem) => {
          const isWeekend = dayItem.day() === 0 || dayItem.day() === 6;
          return (
            <div
              className={isWeekend ? "cell-weekend " : "cell-wrapper"}
              key={dayItem.unix()}
            >
              <div className="row-in-cell">
                <div
                  className={`day-wrapper ${
                    isCurrentMonth(dayItem) ? "current-month" : "other-month"
                  }`}
                >
                  {isCurrentDay(dayItem) ? (
                    <div className="current-day">{dayItem.format("D")}</div>
                  ) : (
                    dayItem.format("D")
                  )}
                </div>
              </div>
              <div className="event-list">
              <div>Start: {dayItem.format('X')}</div>
            
              <div>End: {dayItem.clone().endOf('day').format('X')}</div>

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CalendarGrid;
