import { OvalButton } from '../index';
import { StyledNavbar, StyledLogo, RightContainer, StyledH3 } from './header.style';

const Header = props => {
  const { name, points, children, variant, disabled } = props;

  return (
    <StyledNavbar>
      <StyledLogo><img alt="logo" src="/assets/aerolab-logo.svg"/></StyledLogo>
      <RightContainer>
        <StyledH3>{name}</StyledH3>
        <OvalButton 
          points={points}
          children={children}
          variant={variant}
          disabled={disabled}
        />
      </RightContainer>
    </StyledNavbar>
  );
}

export default Header;
