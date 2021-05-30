import { useState } from 'react';
import { OvalButton } from '../index';
import {
  StyledNavbar,
  StyledNavbarLeftContainer,
  StyledPagination,
  StyledFilters,
  StyledSpan,
  StyledNavbarButtonsContainer,
  StyledNavbarRightContainer
} from './navbar.style';

const Navbar = () => {
  const [keyActive, setKeyActive] = useState('Most recent');

  const navItems = [
    {id: 1, name: 'Most recent'},
    {id: 2, name: 'Lowest price'},
    {id: 3, name: 'Highest price'}
  ]

  const buttons = navItems.map(navItem => (
    <OvalButton
      variant="navbar"
      key={navItem.id}
      children={navItem.name}
      active={navItem === navItem.name ? true : false}
      onClick={() => keyActive === navItem.name ? setKeyActive(null) : setKeyActive(console.log("aver", navItem.name))}
    />
  ))

  return (
    <StyledNavbar>
      <StyledNavbarLeftContainer>
        <StyledPagination>16 of 32 products</StyledPagination>
        <StyledFilters>
          <StyledSpan>Sort by:</StyledSpan>
          <StyledNavbarButtonsContainer>
            {buttons}
          </StyledNavbarButtonsContainer>
        </StyledFilters>
      </StyledNavbarLeftContainer>
      <StyledNavbarRightContainer>
        <button>
          <img alt="arrow left" src="/assets/arrow-left.svg"/>
        </button>
        <button>
          <img alt="arrow right" src="/assets/arrow-right.svg"/>
        </button>
      </StyledNavbarRightContainer>
    </StyledNavbar>
  );
}

export default Navbar;
