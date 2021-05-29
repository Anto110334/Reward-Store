import styled  from 'styled-components';
import baseTheme from '../../themes/baseTheme';

export const StyledBanner = styled.div`
  position: relative;
`;

export const StyledBannerTitle = styled.h1`
  color: ${baseTheme.colors.white};
  position: absolute;
  top: 18rem;
  left: 8rem;
  z-index: 2;
  max-width: 100vw;
  font-size: 4rem;
`;

export const StyledBannerImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
`;