import React from 'react'
import { PopupMainStyled,
         ContainerPopupStyled,
         IconStyled } from './Popup.style';

const Popup = ({setPopupShow}) => {
  return (
    <PopupMainStyled>
      <ContainerPopupStyled>
        <IconStyled alt="buy" src="/assets/feliz.svg"/>
        <h2>¡Éxito!</h2>
        <p>Canje completado</p>
        <button onClick={()=> setPopupShow(prev => !prev)}>
          Continue
        </button>
      </ContainerPopupStyled>
    </PopupMainStyled>
  )
}

export default Popup;
