import { useState } from 'react';
import { OvalButton } from '../index';
import { StyledNavbar, 
          StyledLogo, 
          RightContainer, 
          StyledH3,
          UserMenu} from './header.style';
import SelectCoin from '../SelectCoin';

const Header = props => {
  const { name, points, children, variant, disabled } = props;
  const [show, setShow] = useState(false);

  return (
    <StyledNavbar>
      <StyledLogo><img alt="logo" src="/assets/aerolab-logo.svg"/></StyledLogo>
      <RightContainer>
        <UserMenu onClick={() => setShow(prev => !prev)}>
          <StyledH3>{name}</StyledH3>
          {
            show && <SelectCoin>
            
                    </SelectCoin>
          }
        </UserMenu>
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
