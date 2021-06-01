import { useState, useEffect } from 'react';
import { OvalButton } from '../index';
import usePagination from '../../hooks/usePagination';
import { sortLowest, sortHighest } from '../../helpers/sort';
import { productsData } from '../../services';
import useProductsPagination from '../../context/pagination/pagination.context';
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
  const [keyActive, setKeyActive] = useState(1);
  const navItems = [
    {id: 1, name: 'Most recent'},
    {id: 2, name: 'Lowest price'},
    {id: 3, name: 'Highest price'}
  ];
  const [products, setProducts] = useState({
    status: 'pending...',
    data: [],
  });
  const productPerPage = 16;
  const [productosTemp, setProductosTemp] = useState([]);
  let dataPagination = usePagination(productosTemp,productPerPage);
  const { setProductsPagination } = useProductsPagination();

  useEffect(() => {
    const getAllProducts = async () => {
      const dataProducts = await productsData();
      if (dataProducts) {
        setProducts({
          status: 'success!',
          data: dataProducts,
        })
        setProductosTemp(dataProducts);
      } else {
        setProducts({
          status: 'error!',
          data: [],
        })
      }
    }
    getAllProducts();
  }, []);

  useEffect(() => {
    setProductsPagination(dataPagination);
  }, [productosTemp, dataPagination.currentPage])

  const handleClickBack = () => {
    dataPagination.prev();
  }

  const handleClickNext = () => {
    dataPagination.next();
  }

  const handleClickLower = () => {
    setProductosTemp( prev => sortLowest(prev));
    dataPagination.jump(1);
  }

  const handleClickHighest = () => {
    setProductosTemp( prev => sortHighest(prev));
    dataPagination.jump(1);
  }

  const handleClickMost = () => {
    setProductosTemp(products.data);
    dataPagination.jump(1);
  }
  
  const handleClickActivate = (buttonId) => {
    setKeyActive(buttonId);
    buttonId === 1 && handleClickMost();
    buttonId === 2 && handleClickLower();
    buttonId === 3 && handleClickHighest();
  }

  const buttons = navItems.map(navItem => (
    <OvalButton
      variant="navbar"
      key={navItem.id}
      children={navItem.name}
      active={keyActive === navItem.id ? "true" : "false"}
      onClick={ () => handleClickActivate(navItem.id)}
    />
  ))

  return (
    <StyledNavbar>
      <StyledNavbarLeftContainer>
        <StyledPagination>{dataPagination.currentPage * productPerPage} of {products.data.length} products</StyledPagination>
        <StyledFilters>
          <StyledSpan>Sort by:</StyledSpan>
          <StyledNavbarButtonsContainer>
            {buttons}
          </StyledNavbarButtonsContainer>
        </StyledFilters>
      </StyledNavbarLeftContainer>
      <StyledNavbarRightContainer>
        {
          dataPagination.currentPage !== 1
            ? <button onClick={handleClickBack}>
                <img alt="arrow left" src="assets/arrow-left.svg"/>
              </button>
            : <div></div>
        }
        {
          dataPagination.maxPage !== dataPagination.currentPage 
            ? <button onClick={handleClickNext}>
                <img alt="arrow right" src="assets/arrow-right.svg"/>
               </button>
            : <div></div>
        }
      </StyledNavbarRightContainer>
    </StyledNavbar>
  );
}

export default Navbar;
