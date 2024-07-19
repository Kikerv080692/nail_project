// import "./Nav.scss";
import * as SC from './Nav.styled'

function Nav() {
  return (
    <SC.Nav className="container-navigation">
      <h4>
        <a href="#about_me">Обо мне</a>
      </h4>
      <h4>
        <a href="#works">Мои работы</a>
      </h4>
      <h4>
        <a href="#price">Прайс</a>
      </h4>
      <h4>
        <a href="#contact">Контакты</a>
      </h4>
    </SC.Nav>
  );
}

export default Nav;
