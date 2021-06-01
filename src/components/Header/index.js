import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OvalButton } from '../index';
import { StyledNavbar, 
          StyledLogo, 
          RightContainer, 
          StyledH3,
          UserMenu,
          LeftContainer } from './header.style';
import SelectCoin from '../SelectCoin';

const Header = props => {
  const history = useHistory();
  const { name, points, children, variant, disabled } = props;
  const [show, setShow] = useState(false);
  const [keyActive, setKeyActive] = useState(1);
  const navItems = [
    {id: 1, name: 'Inicio', url: '/'},
    {id: 2, name: 'Historial', url: '/Reward-Store/historial'},
  ];

  const handleClickActivate = (navItem) => {
    setKeyActive(navItem.id);
    history.push(navItem.url);
  }

  const buttons = navItems.map(navItem => (
    <OvalButton
      variant="navbar"
      key={navItem.id}
      children={navItem.name}
      active={keyActive === navItem.id ? "true" : "false"}
      onClick={ () => handleClickActivate(navItem)}
    />
  ))

  return (
    <StyledNavbar>
      <LeftContainer>
        <StyledLogo><img alt="logo" src="assets/aerolab-logo.svg"/></StyledLogo>
        {buttons}
      </LeftContainer>
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
