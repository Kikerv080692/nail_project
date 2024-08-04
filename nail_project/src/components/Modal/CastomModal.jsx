
import {createPortal} from 'react-dom'
import { useEffect } from 'react'
import * as SC from './Modal.styled'
const modalRoot = document.querySelector("#modal-root")

export const CastomModal = ({children, toggleModal, }) => {
  
  useEffect(() => {
    const closeModalESC = (event) => {
      // console.log(typeof event.code)
      if(event.code === 'Escape'){
        toggleModal()
      }
    }
  window.addEventListener('keydown', closeModalESC)
  return () => {
    window.removeEventListener('keydown', closeModalESC)
  }
  },[])

const closeOnClick = (e) => {
// console.log('target',e.target)
// console.log('current',e.currentTarget)
if(e.target === e.currentTarget){
  toggleModal()
}
}

  return createPortal(
    <SC.Overlay onClick={closeOnClick}>
      <SC.Inner>
        {children}
        <SC.CloseBtn type='button'onClick={toggleModal}>X</SC.CloseBtn>
      </SC.Inner>
    </SC.Overlay>,
    modalRoot
  )
}


