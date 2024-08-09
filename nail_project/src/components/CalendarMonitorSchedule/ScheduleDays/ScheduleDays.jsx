import { useGetBookScheduleQuery } from '../../../redux/contacts/schedule';
import * as SC from './ScheduleDays.styled'

export  const ScheduleDays = ({ isCurrentDay, dayItem, isWeekend}) => {
  const { data } = useGetBookScheduleQuery({ days: dayItem.format('D'), month: dayItem.format('MMMM') });

  return (
    <SC.CellWrapper isWeekend={isWeekend}>
    <div onClick={null}>
      {isCurrentDay(dayItem) ? (
        <SC.CurrentDay>{dayItem.format("D")}</SC.CurrentDay>
      ) : (
        dayItem.format("D")
      )}
    </div>
    {data?.data.map(({month, days, hours, minutes, name, number, procedures, textArea}) => {
        <div>
            <div><span>{month} </span> <span>{days}</span></div>   
        </div>
    })}
  </SC.CellWrapper>
  )
}


