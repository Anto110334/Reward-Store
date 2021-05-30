import styled from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const CardContainerStyled = styled.div`
  position: relative;
  width: 276px;
  height: 276px;
  background: #FFFFFF;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 12px;
  transition: all 0.4s ease-out;
  &:hover{
    ${({lack}) => lack === false ? "transform: translateY(-20px)" : ""};
    transition: all 0.4s ease-out;
  }
`;

export const InfoStyled = styled.div`
  height: 100%;
  padding-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  >img{
    width: 159px;
  }
  >div{
    width: 90%;
    align-items: flex-start;
    border-top: 1px solid #D9D9D9;
    padding: 18px 0;
    margin: 18px 0;
    >span{
      font-family: ${baseTheme.typography.fonts.primary};
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.0376471px;
      color: #A3A3A3;
    }
    >h3{
      font-family: ${baseTheme.typography.fonts.primary};
      font-size: 18px;
      line-height: 23px;
      letter-spacing: -0.0423529px;
      color: #616161;
    }
  }
  
  &:hover{
    ${({lack}) => lack === "true" ? "margin-top: 30px" : ""};
  }
`;
