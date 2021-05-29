import styled, { css } from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const StyledButton = styled.button(({ active, variant }) => {
  const changeVariants = variant => {
    switch (variant) {
      case 'points':
        return (
          css`
            color: ${baseTheme.colors.darkGrey};
            background-color: ${baseTheme.colors.lightGrey};
          `
        )
      case 'navbar':
        return (
          css`
            color: ${active ? baseTheme.colors.white : baseTheme.colors.disabledGrey};
            background-color: ${active ? baseTheme.colors.lightBlue : baseTheme.colors.lightGrey};
            &:active{
              color: ${baseTheme.colors.white};
              background-color: ${baseTheme.colors.lightBlue};
            }
            &:hover {
              color: ${baseTheme.colors.white};
              background-color: ${baseTheme.colors.lightBlue2};
            }
          `
        )
      default:
        return (
          css`
            color: ${baseTheme.colors.darkGrey};
            background-color: ${baseTheme.colors.lightGrey};
          `
        )
    }
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
    ${changeVariants(variant)};
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

/* ${withPoints ? variantsStyles[variant] : ''}; */ 