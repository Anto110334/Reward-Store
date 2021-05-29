import { useState, useEffect } from 'react';
import { userData, productsData } from '../../services';
import { Product } from '../../components';

const Home = () => {
  const [products, setProducts] = useState({
    status: 'pending...',
    data: [],
  });
  const [user, setUser] = useState({
    status: 'pending...',
    data: [],
  });

  
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

  const productsList = products?.data.map(product => {
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
      {
        products?.status === 'pending...' && !products?.data  ? <span>Loading...</span> : (
          products?.status === 'error!' && !products?.data ? <span>Result not found</span> : (
            products?.status === 'success!' && products?.data ? productsList : null
          )
        )
      }
    </div>
  );
}

export default Home;
