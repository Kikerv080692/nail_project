import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import * as SC from './CalendarDays.styled'
import { CastomModal } from "../../Modal/CastomModal";

export const CalendarDays = ({ isCurrentDay, dayItem}) => {
  const { isLoggedIn } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
    ;
  };
  return (
    <SC.CellWrapper >
      <div onClick={isLoggedIn ? toggleModal : null}>
        {isCurrentDay(dayItem) ? (
          <SC.CurrentDay>{dayItem.format("D")}</SC.CurrentDay>
        ) : (
          dayItem.format("D")
        )}
      </div>
      {isOpenModal && (
         <CastomModal toggleModal={toggleModal}></CastomModal>
      )}
    </SC.CellWrapper>
  );
};
