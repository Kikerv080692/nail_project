import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import * as SC from "./Form.styled";
import { SelectTimeForm } from "../SelectTimeForm/SelectTimeForm";
import { useTranslation } from "react-i18next";

export const Form = ({ toggleModal, days, month }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [textArea, setTextArea] = useState("");
  const [selectOptions, setSelectedOptions] = useState("");
  const { isLoggedIn } = useAuth();
  const { t, i18n } = useTranslation();
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
        <SC.ContainerForInputLabel>
          <SC.FormInput
            type="text"
            name="name"
            placeholder=" "
            value={name}
            onChange={handlerForm}
            id="Name"
          />
          <SC.Label htmlFor="Name">{t('name')}</SC.Label>
        </SC.ContainerForInputLabel>
        <SC.ContainerForInputLabel>
          <SC.FormInput
            type="tel"
            Input
            name="phone"
            placeholder=" "
            value={phone}
            onChange={handlerForm}
            id="Phone"
          />
          <SC.Label htmlFor="Phone">+380974848539</SC.Label>
        </SC.ContainerForInputLabel>
        <SC.Select
          id="brow"
          value={selectOptions}
          name="select"
          onChange={handlerForm}
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
        <SC.Button type="submit">{t('Confirm')}</SC.Button>
        <SC.Button type="button" onClick={toggleModal}>
          {t('Cancel')}
        </SC.Button>
      </SC.FormElement>
    </SC.WrapperForm>
  );
};
