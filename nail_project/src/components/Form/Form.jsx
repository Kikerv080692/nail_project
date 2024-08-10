import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import * as SC from "./Form.styled";
import { SelectTimeForm } from "../SelectTimeForm/SelectTimeForm";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useAddClientMutation } from "../../redux/clients/clients"; 
import { CastomModal } from "../Modal/CastomModal";
import { useGetBookScheduleQuery } from "../../redux/clients/clients";


export const Form = ({ toggleModal, days, month }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [textArea, setTextArea] = useState("");
  const [procedures, setProcedures] = useState("");
  const { isLoggedIn } = useAuth();
  const { t, i18n } = useTranslation();
  const [addClient] = useAddClientMutation()
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [openModalAfterSubmit, setOpenModalAfterSubmit] = useState(false)
  const {data} = useGetBookScheduleQuery({days, month})
  console.log('5', data)

  const getTime = (hours, minutes) => {
    setHours(hours)
    setMinutes(minutes)
  }

  

  const handlerForm = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "name":
        setName(value);
        return;
      case "number":
        setNumber(value);
        return;
      case "textArea":
        setTextArea(value);
        return;
      case "procedures":
        setProcedures(value);
      default:
        return;
    }
  };

  const formSubmit =  (e) => {
    e.preventDefault();
    addClient({days, month, name, number, hours, minutes, procedures})
    setOpenModalAfterSubmit(true)
    setName('')
    setNumber('')
    setProcedures('')
    setTextArea('')
  };

  return (
    <SC.WrapperForm>
      <SC.WrapperMonthDay>
        <span>{days}</span>
        <span>{month}</span>
      </SC.WrapperMonthDay>
      <SelectTimeForm days={days} month={month} getTime={getTime} />

      <SC.FormElement onSubmit={formSubmit}>
        <SC.ContainerForInputLabel>
          <SC.FormInput
            type="text"
            name="name"
            placeholder=" "
            value={name}
            onChange={handlerForm}
            id="Name"
            required 
          />
          <SC.Label htmlFor="Name">{t('name')}</SC.Label>
        </SC.ContainerForInputLabel>
        <SC.ContainerForInputLabel>
          <SC.FormInput
            type="tel"
            Input
            name="number"
            placeholder=" "
            value={number}
            onChange={handlerForm}
            id="Phone"
            required 
          />
          <SC.Label htmlFor="Phone">{t('number')}</SC.Label>
        </SC.ContainerForInputLabel>
        <SC.Select
          id="brow"
          value={procedures}
          name="procedures"
          onChange={handlerForm}
          required 
        >
          <option value="корекція">{t('correction')}</option>
          <option value="нарощування">{t('Expansion')}</option>
          <option value="манікюр класичний">{t('ClassicManicure')}</option>
          <option value="манікюр +гель-лак">{t('Gel')}</option>
          <option value="педикюр">{t('Pedicure')}</option>
        </SC.Select>
        <SC.TextArea
          rows={3}
          value={textArea}
          name="textArea"
          placeholder={t('Wishes')}
          onChange={handlerForm}
        ></SC.TextArea>
        <SC.Button disabled={name === '' || number === '' || procedures === '' || minutes === ''} type="submit">{t('Confirm')}</SC.Button>
        <SC.Button type="button" onClick={toggleModal}>
          {t('Cancel')}
        </SC.Button>
      </SC.FormElement>
      {openModalAfterSubmit && (
        <CastomModal toggleModal={toggleModal}><SC.P>{t('submit')}</SC.P></CastomModal>)
      }
    </SC.WrapperForm>

  );
};
