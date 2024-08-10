import moment from 'moment';
import { useState } from 'react';
import * as SC from './CalendarMonitorSchedule.styled';
import { ScheduleDays } from './ScheduleDays/ScheduleDays';

export const CalendarMonitorSchedule = () => {
    const totalDays = 7;
    const [today, setToday] = useState(moment());
    const [daySchedule, setDaySchedule] = useState([]);
    
    moment.locale('uk');
   
    const startOfWeek = today.clone().startOf('isoWeek');
    const daysArray = [...Array(totalDays)].map((_, i) =>
        startOfWeek.clone().add(i, 'days')
    );
    
    const isWeekend = (day) => {
        const dayOfWeek = day.day();
        return dayOfWeek === 0 || dayOfWeek === 6;
    };
    
    const getDaySchedule = (value) => {
        setDaySchedule(value);
    };

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
    console.log('80', daySchedule);
    return (
        <SC.All>
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
                        getDaySchedule={getDaySchedule}
                    />
                ))}
            </SC.CalendarGrid>

            {daySchedule.map(
                ({
                    month,
                    days,
                    hours,
                    minutes,
                    name,
                    number,
                    procedures,
                    textArea,
                }) => (
                    <SC.MonitorData>
                        <div>
                            <span>{month} </span> <span>{days}</span>
                        </div>
                        <div>
                            <span>{hours}</span> : <span>{minutes}</span>
                        </div>
                        <div>{name}</div>
                        <div>{number}</div>
                        <div>{procedures}</div>
                        <div>{textArea}</div>
                    </SC.MonitorData>
                )
            )}
        </SC.All>
    );
};
