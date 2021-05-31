import styled from 'styled-components';

export const HoverProductContainerStyled = styled.div`
  position: relative;
`;

export const DetailContainerStyled = styled.div`
  position: fixed;
`;

export const IconBuyHoverStyled = styled.img`
  width: 42px;
  min-height: 42px;
  align-self: flex-end;
  z-index: 1;
`;

export const IconBuyStyled = styled.img`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 42px;
  height: 42px;
  z-index: 0;
`;

export const HoverContainerStyled = styled.div`
  width: 276px;
  height: 276px;
  background: transparent;
  padding: 12px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);
  z-index: 1;
  -webkit-box-shadow: 14px 7px 18px 3px rgba(0,0,0,0.36); 
  box-shadow: 14px 7px 18px 3px rgba(0,0,0,0.36);
  opacity: 0;
  &:hover{
    opacity: 1;
  }
`;

export const RedeemStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >h2{
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.0847059px;
    color: #FFFFFF;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
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

export const PriceStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  >h2{
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.0847059px;
    color: #FFFFFF;
    padding: .2rem;
  }
  >img{
    padding: .4rem 0 .2rem 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
