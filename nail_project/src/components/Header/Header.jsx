import Button from "../Button/Button";
import nail from "../../images/nail.jpg";
import * as SC from './Header.styled';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SC.Header>
        <SC.Foto>
          <img src={nail} alt="" />
        </SC.Foto>
        <SC.TextWrapperH2>
          <h2>
            Nails <br />
            with love
          </h2>
        </SC.TextWrapperH2>
      </SC.Header>
      <SC.TextWrapperH3>
        <h3>
          {t('header')}
        </h3>
      </SC.TextWrapperH3>
      <SC.ButtonBox>
        <Button>{t('buttonSchedule')}</Button>
      </SC.ButtonBox>
    </>
  );
};

export default Header;
