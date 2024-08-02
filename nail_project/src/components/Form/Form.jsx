import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import * as SC from "./Form.styled";
import { SelectTimeForm } from "../SelectTimeForm/SelectTimeForm";



export const Form = ({ toggleModal, days, month }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [textArea, setTextArea] = useState("");
  const [selectOptions, setSelectedOptions] = useState("");
  const { isLoggedIn } = useAuth();
  


  const handlerForm = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "name":
        setName(value);
        return;
      case "phone":
        setPhone(value);
        return;
      case "textArea":
        setTextArea(value);
        return;
      case "select":
        setSelectedOptions(value);
      default:
        return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  


  return (
    <SC.WrapperForm>
      <SC.WrapperMonthDay>
        <span>{days}</span>
        <span>{month}</span>
      </SC.WrapperMonthDay>
      <SelectTimeForm days={days} month={month} />

      <SC.FormElement onSubmit={formSubmit}>
        <SC.Input
          type="text"
          name="name"
          placeholder="Ваше ім'я"
          value={name}
          onChange={handlerForm}
        />
        <SC.Input
          type="tel"
          Input
          name="phone"
          placeholder="Ваш номер телефону"
          value={phone}
          onChange={handlerForm}
        />
        <SC.Select
          id="brow"
          value={selectOptions}
          name="select"
          onChange={handlerForm}
        >
          <option value="корекція">Корекція</option>
          <option value="нарощування">нарощування</option>
          <option value="манікюр класичний">манікюр класичний</option>
          <option value="манікюр +гель-лак">манікюр +гель-лак</option>
          <option value="педикюр">педикюр</option>
        </SC.Select>
        <SC.TextArea
          rows={5}
          value={textArea}
          name="textArea"
          placeholder="Bаші побажання"
          onChange={handlerForm}
        ></SC.TextArea>
        <SC.Button type="submit">Підтвердити</SC.Button>
        <SC.Button type="button" onClick={toggleModal}>
          Відмінити
        </SC.Button>
      </SC.FormElement>
    </SC.WrapperForm>
  );
};
