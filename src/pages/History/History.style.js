import styled from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const H1Styled = styled.h1`
  padding: 1rem 2rem;
  font-size: 1.4rem;
  color: ${baseTheme.colors.darkGrey};
`;


