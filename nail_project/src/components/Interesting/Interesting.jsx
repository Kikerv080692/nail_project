import * as SC from './Interesting.styled'
import { useTranslation } from "react-i18next";

export const Interesting = () => {
  const { t } = useTranslation();
  return (
    <SC.Section>
      <SC.WrapperFirst>
        <SC.Header>
          <h2>{t('text1')}</h2>
        </SC.Header>
        <h3>{t('text2')}</h3>
        <p>{t('text3')}</p>
      </SC.WrapperFirst>
      <div>
        <SC.Header>{t('text4')}</SC.Header>
        <SC.TextWrapper>
          <p>{t('text4.1')}</p>
        </SC.TextWrapper>
        <SC.TextWrapper>
          <p>{t('text4.2')}</p>
        </SC.TextWrapper>
        <SC.TextWrapper>
          <p>{t('text4.3')}</p>
        </SC.TextWrapper>
      </div>
    </SC.Section>
  );
};
