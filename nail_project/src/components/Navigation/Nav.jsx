// import "./Nav.scss";
import {useAuth} from '../../hooks/useAuth'
import { Logout } from '../Logout/Logout';
import * as SC from './Nav.styled'
import {useTranslation} from 'react-i18next'

function Nav() {
  const {t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage (language);
    };
  const {isLoggedIn} = useAuth()
  console.log(isLoggedIn)
  return (
    <SC.Nav className="container-navigation">
      <h4>
        <a href="#works"><span>{t('nav1')}</span></a>
      </h4>
      <h4>
        <a href="#price">{t('nav2')}</a>
      </h4>
      <h4>
        <a href="#contact">{t('nav3')}</a>
      </h4>
      {
        isLoggedIn && <Logout/> 
      }
     <button onClick={() => changeLanguage('en')}>EN</button>
     <button onClick={() => changeLanguage('uk')}>UK</button>
     <button onClick={() => changeLanguage('cze')}>CZE</button>
     <div>{t('text')}</div>
      
    </SC.Nav>
  );
}

export default Nav;
