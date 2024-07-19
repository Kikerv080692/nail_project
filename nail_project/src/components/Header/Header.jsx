import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import nail from "../../images/nail.jpg";
import * as SC from './Header.styled'

const Header = () => {
  return (
    <SC.Header className="container-header">
      {/* <div className="star"></div> */}
      <div className="header-img">
        <img src={nail} alt="" />
      </div>
      <div className="header-img-text">
        <h2>
          Nails <br />
          with love
        </h2>
      </div>
      <div className="header-text">
        <h3>
          Делаю уникальный и аккуратный маникюр, придавая вашим ручкам красивый
          и ухоженный вид
        </h3>
      </div>
      <SC.ButtonBox className="custom-button-box">
        <Button className="custom-button">Записаться</Button>
      </SC.ButtonBox>
    </SC.Header>
  );
};

export default Header;
