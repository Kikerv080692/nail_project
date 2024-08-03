import { useState } from "react";
import * as SC from './SelectTimeForm.styled'
import { useAuth } from "../../hooks/useAuth";

export const TimeItem = ({hours, minutes, id}) => {
    const [isCheckTime, setIsCheckTime] = useState(false)
    const { isLoggedIn } = useAuth();
    const toggleTime = () => {
        setIsCheckTime(!isCheckTime)
    }

  return (
    <SC.TimeContainer onClick={toggleTime} isCheckTime={isCheckTime}>
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
