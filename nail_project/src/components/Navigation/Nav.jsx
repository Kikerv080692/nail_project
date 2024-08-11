import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Logout } from '../Logout/Logout';
import * as SC from './Nav.styled';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import {CastomModal} from '../Modal/CastomModal'
import { BookSchedule } from '../BookSchedule/BookSchedule';


const languageOptions = [
  { value: 'en', label: 'English', icon: '../../../public/icons/britain_icon.png' },
  { value: 'uk', label: 'Українська', icon: '../../../public/icons/n_ukraine_ico.png' },
  { value: 'cze', label: 'Čeština', icon: '../../../public/icons/1_icon-czech-republic.png' },
];

function Nav() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isOpenModalSchedule, setIsOpenModalSchedule] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false);
 
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(languageOptions.find(option => option.value === savedLanguage));
    } else {
      const defaultLanguage = 'en'; 
      i18n.changeLanguage(defaultLanguage);
      setSelectedLanguage(languageOptions.find(option => option.value === defaultLanguage));
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    setSelectedLanguage(languageOptions.find(option => option.value === language));
  };

  const { isLoggedIn } = useAuth();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
    input: (provided) => ({
      ...provided,
      margin: '0px', 
      padding: '0px',
    }),
    control: (provided) => ({
      ...provided,
      border: '1px solid #ccc',
      '&:hover': {
        outline: 'none'
      },
    }),
  };

  
  const formatOptionLabel = ({ label, icon }) => (
    <SC.DIV style={{ display: 'flex', alignItems: 'center' }}>
      <img src={icon} alt={label} style={{ width: 20, marginRight: 10 }} />
      {/* {label} */}
    </SC.DIV>
  );

  const toggleModalSchedule = () => {
    setIsOpenModalSchedule(!isOpenModalSchedule)
  }
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
    <SC.Nav $isNavOpen={isNavOpen}>
      <SC.Navmenu $isNavOpen={isNavOpen}>
      <h4>
        <a href="#works">{t('nav1')}</a>
      </h4>
      <h4>
        <a href="#price">{t('nav2')}</a>
      </h4>
      <h4>
        <a href="#contact">{t('nav3')}</a>
      </h4>
      <h4>
        <a href="#" onClick={toggleModalSchedule} >{t('nav4')}</a>
      </h4>

      </SC.Navmenu>
      
      
      {isLoggedIn && <Logout />}
      <Select
        value={selectedLanguage}
        options={languageOptions}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        onChange={(selectedOption) => changeLanguage(selectedOption.value)}
      />
       <SC.A
            href="#nav"
            className={`nav__toggle ${isNavOpen ? 'nav__toggle--open' : ''}`}
            role="button"
            aria-controls="menu"
            onClick={toggleNav}
            $isNavOpen={isNavOpen}
          >
            <SC.MenuIcon className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
              <title>Toggle Menu</title>
              <g>
                <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
                <circle className="menuicon__circle" r="23" cx="25" cy="25" />
              </g>
            </SC.MenuIcon>
          </SC.A>
    </SC.Nav>
    {isOpenModalSchedule && <CastomModal toggleModal={toggleModalSchedule}><BookSchedule/></CastomModal>} 
    </>
  );
}

export default Nav;
