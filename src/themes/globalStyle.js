import { createGlobalStyle } from 'styled-components';
import baseTheme from './baseTheme';

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${baseTheme.typography.fonts.primary};
  }
`;

export default GlobalStyle;
