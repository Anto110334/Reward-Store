import styled from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const StyledNavbar = styled.div`
  height: auto;
  width: 100%;
  padding: 1.4rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 100%;
`;

export const StyledH3 = styled.h3`
  font-size: 1.5rem;
  color: ${baseTheme.colors.darkGrey};
`;