import { useState, useEffect } from 'react';
import { productsData } from '../../services';
import { Product } from '../../components';
import usePagination from '../../hooks/usePagination';
import { ContainerStyled } from './HomeStyle';
import { sortLowest, sortHighest } from '../../helpers/sort';

const Home = () => {
  const [products, setProducts] = useState({
    status: 'pending...',
    data: [],
  });
  const [user, setUser] = useState({
    status: 'pending...',
    data: [],
  });
  const productPerPage = 16;
  const [productosTemp, setProductosTemp] = useState([]);
  let dataPagination = usePagination(productosTemp,productPerPage);

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

  const productsList = dataPagination.currentData().map(product => {
    return (
      <Product
        key={product?._id}
        name={product?.name}
        category={product?.category}
        alt={product?.name}
        photo={product?.img?.url}
        cost={product?.cost}
        UserPoints={user.data.points}
      />
    );
  });

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

  return (
    <div>
      {/* Provisorio */}
      <div>
        <button onClick={handleClickMost}>
          Most recent
        </button>
        <button onClick={handleClickLower}>
          Lower
        </button>
        <button onClick={handleClickHighest}>
          Highest
        </button>
      </div>
      <hr/>
      <div>
        <button onClick={dataPagination.prev}>
          Back
        </button>
        <button onClick={dataPagination.next}>
          Next
        </button>
      </div>
      <ContainerStyled>
        {
          products?.status === 'pending...' && !products?.data  ? <span>Loading...</span> : (
            products?.status === 'error!' && !products?.data ? <span>Result not found</span> : (
              products?.status === 'success!' && products?.data ? productsList : null
            )
          )
        }
      </ContainerStyled>
      {/* Provisorio */}
      <div>

        {dataPagination.currentPage * productPerPage} of {products.data.length}
      </div>
    </div>
  );
}

export default Home;
