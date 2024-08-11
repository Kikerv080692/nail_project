
import * as SC from './SelectTimeForm.styled'
import { useAuth } from "../../hooks/useAuth";
import { useIsCheckTime } from "./hooks/useIsCheckTime";

export const TimeItem = ({hours, minutes, id, deleteTime, getTime, booked}) => {
   
    const { isLoggedIn } = useAuth();
    const {isCheck, toggleTime} = useIsCheckTime({getTime, minutes, hours})
    
   

  return (
    <SC.TimeContainer onClick={toggleTime} $isCheck={isCheck} $isCheckTime={booked} disabled={booked}>
      <SC.TimeDisplay>
        {hours}:{minutes}
      </SC.TimeDisplay>
      {isLoggedIn && (
        <SC.DeleteButton onClick={() => deleteTime(id)}>
          Delete
        </SC.DeleteButton>
      )}
    </SC.TimeContainer>
  );
};
