import styled, { css } from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const StyledButton = styled.button(({ disabled, variant }) => {
  const variantsStyles = {
    points: `
      color: ${baseTheme.colors.darkGrey};
      background-color: ${baseTheme.colors.lightGrey};
    `,
    navbar: `
      color: ${baseTheme.colors.white};
      background-color: ${baseTheme.colors.lightBlue};
  
      &:hover {
        background-color: ${baseTheme.colors.lightBlue2};
      }
    `,
  }

  const variantsStylesDisabled = {
    navbar: `
      color: ${baseTheme.colors.disabledGrey};
      background-color: ${baseTheme.colors.lightGrey};
    `,
  }
  
  return css`
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    border-radius: 10px;
    letter-spacing:-0.15px;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    ${disabled ? variantsStylesDisabled[variant] : variantsStyles[variant]};
  `;
  },
);

export const StyledPoints = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 1.5rem;
    margin: 3px 0 0 5px;
  }
`;
