import { useState, useEffect } from 'react';
import { userData, productsData } from '../../services';
import { Product } from '../../components';
import usePagination from '../../hooks/usePagination';

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
  const dataPagination = usePagination(products.data,productPerPage);

  useEffect(() => {
    const getAllProducts = async () => {
      const dataProducts = await productsData();
      const dataUser = await userData();
      if (dataProducts) {
        setProducts({
          status: 'success!',
          data: dataProducts,
        })
      } else {
        setProducts({
          status: 'error!',
          data: [],
        })
      }
      if (dataUser) {
        setUser({
          status: 'success!',
          data: dataUser,
        })
      } else {
        setUser({
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
      />
    );
  });

  return (
    <div>
      //Provisorio
      <div>
        <button onClick={dataPagination.prev}>
          Back
        </button>
        <button onClick={dataPagination.next}>
          Next
        </button>
      </div>
      {
        products?.status === 'pending...' && !products?.data  ? <span>Loading...</span> : (
          products?.status === 'error!' && !products?.data ? <span>Result not found</span> : (
            products?.status === 'success!' && products?.data ? productsList : null
          )
        )
      }
      //Provisorio
      <div>
        {dataPagination.currentPage * productPerPage} of {products.data.length}
      </div>
    </div>
  );
}

export default Home;
