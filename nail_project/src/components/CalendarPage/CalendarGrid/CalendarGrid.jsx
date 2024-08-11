import moment from "moment";
import { CalendarDays } from "../CalendarDays/CalendarDays";
import * as SC from './CalendarGrid.styled'
import 'moment/locale/uk'
moment.locale('uk')

export const CalendarGrid = ({ today, startDay }) => {
  const totalDays = 42;
  
  const day = startDay.clone().subtract(0, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  

  const isCurrentDay = (day) => {
    return moment().isSame(day, "day");
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
        {daysArray.map((dayItem) => (
          <CalendarDays key={dayItem.unix()}  isCurrentDay={isCurrentDay}  dayItem={dayItem} 
          
          />
        ))}
      </SC.CalendarGrid>

    </div>
  );
};
