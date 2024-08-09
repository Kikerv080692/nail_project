import moment from 'moment';
import { useState } from 'react';
import * as SC from './CalendarMonitorSchedule.styled';
import { ScheduleDays } from './ScheduleDays/ScheduleDays';

export const CalendarMonitorSchedule = () => {
    const totalDays = 7;
    const [today, setToday] = useState(moment());
    // const startDay = today.clone();
    moment.locale('uk');
    // days={dayItem.format('D')} month={dayItem.format('MMMM')
    // const day = startDay.clone().subtract(7, 'day');
    // const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
    const startOfWeek = today.clone().startOf('isoWeek');
    const daysArray = [...Array(totalDays)].map((_, i) =>
        startOfWeek.clone().add(i, 'days')
    );
    // const weekDays = moment.weekdaysShort(true);
    // const Today = today.format('MMMM');
    //   console.log("9", Today)
    //   console.log('8',weekDays)
    const isWeekend = (day) => {
        const dayOfWeek = day.day(); 
        return dayOfWeek === 0 || dayOfWeek === 6; 
    };
    // const dat = day.day()
    // console.log("10", dat)


    const isCurrentDay = (day) => {
        return moment().isSame(day, 'day');
    };
    const prevWeekHandler = () => {
        setToday((prev) => prev.clone().subtract(1, 'week'));
    };

    const nextWeekHandler = () => {
        setToday((prev) => prev.clone().add(1, 'week'));
    };
    const todayHandler = () => {
        setToday(moment());
    };
    return (
        <div>
            <SC.MenuWrapper>
                <SC.MonthWrapper>
                    <span>{today.format('MMMM')}</span>
                    <span>{today.format('YYYY')}</span>
                </SC.MonthWrapper>
                <SC.ButtonWrapper>
                    <SC.Button type="button" onClick={prevWeekHandler}>
                        &lt;
                    </SC.Button>
                    <SC.Button type="button" onClick={todayHandler}>
                        Today
                    </SC.Button>
                    <SC.Button type="button" onClick={nextWeekHandler}>
                        &gt;
                    </SC.Button>
                </SC.ButtonWrapper>
            </SC.MenuWrapper>
            <SC.WrapperWeekDays>
                {[...Array(7)].map((_, index) => (
                    <div key={index}>
                        <span>
                            {moment()
                                .day(index + 1)
                                .format('ddd')
                                .toUpperCase()}
                        </span>
                    </div>
                ))}
            </SC.WrapperWeekDays>
            <SC.CalendarGrid>
                {daysArray.map((dayItem, index) => (
                    <ScheduleDays
                        key={dayItem.unix()}
                        isCurrentDay={isCurrentDay}
                        dayItem={dayItem}
                        isWeekend={isWeekend(dayItem)}
                    />
                ))}
            </SC.CalendarGrid>
        </div>
    );
};
