import styled from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const ContainerStyled = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${baseTheme.colors.white};
  -webkit-box-shadow: 1px 2px 12px 0px rgba(0,0,0,0.95); 
  box-shadow: 1px 2px 12px 0px rgba(0,0,0,0.95);
  border-radius: 5px;
  >button{
    margin: 10px 0;
    &:hover{
      background-color: ${baseTheme.colors.extraLightGrey};
    }
  }
`;