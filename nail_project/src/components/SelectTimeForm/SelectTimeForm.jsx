import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import * as SC from './SelectTimeForm.styled';
import { useAddScheduleMutation, useDeleteScheduleTimeMutation, useGetScheduleQuery } from '../../redux/contacts/schedule';


import { TimeItem } from './TimeItem';
import { useTranslation } from 'react-i18next';

export const SelectTimeForm = ({ days, month, getTime }) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const { isLoggedIn } = useAuth();
  const [addSchedule] = useAddScheduleMutation();
  const { data } = useGetScheduleQuery({ days, month });

  const [deleteTime] = useDeleteScheduleTimeMutation();
  const { t } = useTranslation();

  const handleTime = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'hours':
        setHours(value);
        break;
      case 'minutes':
        setMinutes(value);
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addSchedule({ hours, minutes, days, month });
    setHours('');
    setMinutes('');
  };

  return (
    <>
      {isLoggedIn && (
        <SC.FormTimeWrapper onSubmit={handleSubmit}>
          <SC.ContainerForInputLabel>
            <SC.FormInput
              type="number"
              name="hours"
              value={hours}
              onChange={handleTime}
              placeholder=" "
              id="hours"
            />
            <SC.Label htmlFor="hours">Hours</SC.Label>
          </SC.ContainerForInputLabel>
          <SC.ContainerForInputLabel>
            <SC.FormInput
              type="number"
              name="minutes"
              value={minutes}
              onChange={handleTime}
              placeholder=" "
              id="minutes"
            />
            <SC.Label htmlFor="minutes">Minutes</SC.Label>
          </SC.ContainerForInputLabel>
          <SC.Button type="submit">{t('Create')}</SC.Button>
        </SC.FormTimeWrapper>
      )}

      <SC.TimeShowWrapper>
        {data?.data.map(({ hours, minutes, _id, booked }) => (
          <TimeItem
            hours={hours}
            minutes={minutes}
            id={_id}
            booked={booked}
            key={_id}
            deleteTime={deleteTime}
            getTime={getTime}
          />
        ))}
      </SC.TimeShowWrapper>
    </>
  );
};
