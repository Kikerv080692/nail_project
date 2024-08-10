import { useState } from 'react'
import * as SC from './BurgerMenu.styled'
import { useTranslation } from 'react-i18next';
// import NavToggle from './NavToggle/NavToggle';


const BurgerMenu = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)
  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <SC.Menu>
      <SC.Nav isOpen={isOpen}>
        <ul>
          <li><a href="">{t('nav1')}</a></li>
          <li><a href="">{t('nav2')}</a></li>
          <li><a href="">{t('nav3')}</a></li>
          <li><a href="">{t('nav4')}</a></li>
        </ul>
      </SC.Nav>
      {/* <NavToggle/> */}
      <SC.BurgerWrapper>
      <SC.Burger isOpen={isOpen} onClick={toggleBurgerMenu}><span></span></SC.Burger>
      </SC.BurgerWrapper>
    </SC.Menu>
  )
}

export default BurgerMenu
