import React from "react";
import Button from "../Button/Button";
import nail from "../../images/nail.jpg";
import * as SC from './Header.styled'

const Header = () => {
  return (
    <>
      <SC.Header>
        <SC.Foto>
          <img src={nail} alt="" />
        </SC.Foto>
        <SC.TextWrapperH2 >
          <h2>
            Nails <br/>
            with love
          </h2>
        </SC.TextWrapperH2>
      </SC.Header>
        <SC.TextWrapperH3>
          <h3>
            Делаю уникальный и аккуратный маникюр, придавая вашим ручкам
            красивый и ухоженный вид
          </h3>
        </SC.TextWrapperH3>
      <SC.ButtonBox >
        <Button>Записатися</Button>
      </SC.ButtonBox>
    </>
  );
};

export default Header;
