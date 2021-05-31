import styled from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const CardContainerStyled = styled.div`
  width: 40%;
  background: #FFFFFF;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 12px;
  padding: 1rem;
  transition: all 0.4s ease-out;
`;

export const InfoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  >img{
    width: 159px;
  }
  >div{
    width: 90%;
    align-items: flex-start;
    padding: 18px 0;
    margin: 0 50px;
    >span{
      font-family: ${baseTheme.typography.fonts.primary};
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.0376471px;
      color: #A3A3A3;
    }
    
  }
  h3{
      font-family: ${baseTheme.typography.fonts.primary};
      font-size: 18px;
      line-height: 23px;
      letter-spacing: -0.0423529px;
      color: #616161;
    }
`;
