import React from "react";
import instagram from "../../images/instagram_icon.png";
import telegram from "../../images/telegram.png";
// import "./Contacts.scss";
import * as SC from './Contacts.styled'

function Footer() {
  return (
    <SC.Footer id="contact">
      <h1 >Contacts</h1>
      <SC.IMG className="contacts-img">
        <a href="https://instagram.com/Love_yourself_nails_" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://t.me/+380501003951" target="_blank">
          <img src={telegram} alt="telegram" />
        </a>
      </SC.IMG>
    </SC.Footer>
  );
}

export default Footer;
