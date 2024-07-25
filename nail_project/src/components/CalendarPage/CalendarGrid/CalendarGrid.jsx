import moment from "moment";
import { CalendarDays } from "../CalendarDays/CalendarDays";
import * as SC from './CalendarGrid.styled'
import 'moment/locale/uk'
moment.locale('uk')

export const CalendarGrid = ({ today, startDay }) => {
  const totalDays = 42;
  
  const day = startDay.clone().subtract(0, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  console.log("day", day);

  const isCurrentDay = (day) => {
    return moment().isSame(day, "day");
  };

  console.log("currentDay", isCurrentDay);

  const isSelectedMonth = () => {
    return moment().isSame(month, "month");
  };

 
  return (
    <div>
    <SC.WrapperWeekDays>
        {[...Array(7)].map((_, index) => (
          <div key={index}>
            <span>
              {moment()
                .day(index + 1)
                .format("ddd")
                .toUpperCase()}
            </span>
          </div>
        ))}
        </SC.WrapperWeekDays>
      <SC.CalendarGrid>
        {daysArray.map((dayItem, index) => (
          <CalendarDays key={dayItem.unix()}  isCurrentDay={isCurrentDay}  dayItem={dayItem} 
          
          />
        ))}
      </SC.CalendarGrid>

    </div>
  );
};
