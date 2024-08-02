import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import * as SC from './SelectTimeForm.styled'
import { useAddScheduleMutation } from "../../redux/contacts/schedule";
import {useGetScheduleQuery} from '../../redux/contacts/schedule'
import {useDeleteScheduleTimeMutation} from '../../redux/contacts/schedule'


export const SelectTimeForm = ({ days, month }) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [item, setItem] = useState([]);
  const { isLoggedIn } = useAuth();
  const [addSchedule] = useAddScheduleMutation()
  const {data} = useGetScheduleQuery({days, month})
  const [deleteTime] = useDeleteScheduleTimeMutation()


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
    addSchedule(  { hours, minutes, days, month });
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
        {data?.data.map(({ hours, minutes, _id }) => (
          <div key= {_id}>
            {hours}:{minutes}
            {isLoggedIn && <button onClick={() => deleteTime(_id)}>Delete</button>}
           
          </div> 

        ))}
      </SC.TimeShowWrapper>
    </>
  );
};
