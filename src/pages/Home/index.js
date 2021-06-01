import { useState } from 'react';
import { Product, Popup } from '../../components';
import { ContainerStyled } from './HomeStyle';
import useUser from '../../context/user/user.context';
import useProductsPagination from '../../context/pagination/pagination.context';

const Home = () => {
  const { user } = useUser();
  const { productsPagination } = useProductsPagination();
  const [popupShow, setPopupShow] = useState(false);

  const productsList = productsPagination?.currentData().map(product => {
    return (
      <Product
        key={product?._id}
        productId={product?._id}
        name={product?.name}
        category={product?.category}
        alt={product?.name}
        photo={product?.img?.url}
        cost={product?.cost}
        UserPoints={user?.points}
        setPopupShow={setPopupShow}
      />
    );
  });

  return (
    <>
      {
        popupShow && <Popup setPopupShow={setPopupShow}/>
      }
      <ContainerStyled>
        {
          !(productsPagination && user) ? <span>Loading...</span>
                              : productsList
        }
      </ContainerStyled>
    </>
  );
}

export default Home;
