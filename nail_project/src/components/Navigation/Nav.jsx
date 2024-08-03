import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Logout } from '../Logout/Logout';
import * as SC from './Nav.styled';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const languageOptions = [
  { value: 'en', label: 'English', icon: '../../../public/icons/britain_icon.png' },
  { value: 'uk', label: 'Українська', icon: '../../../public/icons/n_ukraine_ico.png' },
  { value: 'cze', label: 'Čeština', icon: '../../../public/icons/1_icon-czech-republic.png' },
];

function Nav() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(null);

 
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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={icon} alt={label} style={{ width: 20, marginRight: 10 }} />
      {label}
    </div>
  );

  return (
    <SC.Nav className="container-navigation">
      <h4>
        <a href="#works">{t('nav1')}</a>
      </h4>
      <h4>
        <a href="#price">{t('nav2')}</a>
      </h4>
      <h4>
        <a href="#contact">{t('nav3')}</a>
      </h4>
      {isLoggedIn && <Logout />}
      <Select
        value={selectedLanguage}
        options={languageOptions}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        onChange={(selectedOption) => changeLanguage(selectedOption.value)}
      />
    </SC.Nav>
  );
}

export default Nav;
