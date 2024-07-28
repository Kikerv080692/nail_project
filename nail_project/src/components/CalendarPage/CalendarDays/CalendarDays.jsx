import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import * as SC from './CalendarDays.styled'
import { CastomModal } from "../../Modal/CastomModal";
import { Form } from "../../Form/Form";

export const CalendarDays = ({ isCurrentDay, dayItem}) => {
  const { isLoggedIn } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
    ;
  };
// console.log('888',dayItem.format('D'))

  return (
    <SC.CellWrapper >
      <div onClick={toggleModal}>
        {isCurrentDay(dayItem) ? (
          <SC.CurrentDay>{dayItem.format("D")}</SC.CurrentDay>
        ) : (
          dayItem.format("D")
        )}
      </div>
      {isOpenModal && (
         <CastomModal toggleModal={toggleModal}><Form toggleModal={toggleModal} days={dayItem.format('D')} month={dayItem.format('MMMM')}/></CastomModal>
      )}
    </SC.CellWrapper>
  );
};
