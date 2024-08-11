import { useGetBookScheduleQuery } from '../../../redux/clients/clients';
import * as SC from './ScheduleDays.styled'

export  const ScheduleDays = ({ isCurrentDay, dayItem, isWeekend, getDaySchedule}) => {
  const { data } = useGetBookScheduleQuery({ days: dayItem.format('D'), month: dayItem.format('MMMM') });

const handleClick = () => {
  getDaySchedule(data?.data)
}
  return (
    <SC.CellWrapper $isWeekend={isWeekend} onClick={handleClick}>
    <div >
      {isCurrentDay(dayItem) ? (
        <SC.CurrentDay>{dayItem.format("D")}</SC.CurrentDay>
      ) : (
        dayItem.format("D")
      )}
    </div>
   
  </SC.CellWrapper>
  )
}


