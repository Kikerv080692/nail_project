import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import * as SC from './SelectTimeForm.styled'
import { useAddScheduleMutation } from "../../redux/contacts/schedule";


export const SelectTimeForm = ({ days, month }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [item, setItem] = useState([]);
  const { isLoggedIn } = useAuth();
  const [addSchedule] = useAddScheduleMutation()

  const handleTime = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "hours":
        setHours(value);
        break;
      case "minutes":
        setMinutes(value);
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addSchedule({ hours, minutes, days, month });
  };
  console.log('item', item)
  return (
    <>
      {isLoggedIn && (
        <SC.FormTimeWrapper onSubmit={handleSubmit}>
          <SC.Input
            type="number"
            name="hours"
            value={hours}
            onChange={handleTime}
            placeholder="hours"
          />
          <SC.Input
            type="number"
            name="minutes"
            value={minutes}
            onChange={handleTime}
            placeholder="minutes"
          />
          <SC.Button type="submit">Створити</SC.Button>
        </SC.FormTimeWrapper>
      )}

      <SC.TimeShowWrapper >
        {/* {item.map(({ hours, minutes }) => (
          <div>
            {hours}:{minutes}
          </div> 
        ))} */}
      </SC.TimeShowWrapper>
    </>
  );
};
