import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";

import { CastomModal } from "../../Modal/CastomModal";

export const CalendarDays = ({ isCurrentDay, dayItem}) => {
  const { isLoggedIn } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
    ;
  };
  return (
    <div>
      <div onClick={isLoggedIn ? toggleModal : null}>
        {isCurrentDay(dayItem) ? (
          <div>{dayItem.format("D")}</div>
        ) : (
          dayItem.format("D")
        )}
      </div>
      {isOpenModal && (
         <CastomModal toggleModal={toggleModal}>dmalknflfnfnsdlf</CastomModal>
      )}
    </div>
  );
};
