// import "./Nav.scss";
import {useAuth} from '../../hooks/useAuth'
import { Logout } from '../Logout/Logout';
import * as SC from './Nav.styled'

function Nav() {
  const {isLoggedIn} = useAuth()
  console.log(isLoggedIn)
  return (
    <SC.Nav className="container-navigation">
      <h4>
        <a href="#works">Мои работы</a>
      </h4>
      <h4>
        <a href="#price">Прайс</a>
      </h4>
      <h4>
        <a href="#contact">Контакты</a>
      </h4>
      {
        isLoggedIn && <Logout/> 
      }
    
      
    </SC.Nav>
  );
}

export default Nav;
