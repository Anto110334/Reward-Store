import styled from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const StyledNavbar = styled.div`
  height: auto;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${baseTheme.colors.extraLightGrey};
`;

export const StyledNavbarLeftContainer = styled.div`
  display: flex;
`;

export const StyledPagination = styled.p`
  font-size: 1.4rem;
  color: ${baseTheme.colors.darkGrey};
`;

export const StyledFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid ${baseTheme.colors.extraLightGrey};
`;

export const StyledSpan = styled.span`
  font-size: 1.4rem;
  color: ${baseTheme.colors.disabledGrey};
`;

export const StyledNavbarButtonsContainer = styled.div`
  display: flex;
`;

export const StyledNavbarRightContainer = styled.div`
  min-width: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  >div{
    width: 48px;
    height: 48px;
  }
  > button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;
