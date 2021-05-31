import styled from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const PopupMainStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.3);
  z-index: 250;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerPopupStyled = styled.div`
  width: 400px;
  height: 21.625rem;
  background: linear-gradient(160deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  box-shadow: 0px 15px 30px #00000026;
  border-radius: 30px;
  opacity: 1;
  padding: 2.53rem 5.72rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  >h2{
    font-family: ${baseTheme.typography.fonts.primary};
    color: ${baseTheme.colors.white};
  }
  >button{
    width: 187px;
    height: 42px;
    border: none;
    outline: none;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.0423529px;
    color: #616161;
    border-radius: 20px;
    cursor: pointer;
    background: #DADADA;
    &:hover{
      background: #ffffff;
    }
  }
`;

export const IconStyled = styled.img`
  width: 80px;
  height: 80px;
`;

