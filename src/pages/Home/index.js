import { useState, useEffect } from 'react';
import { Product } from '../../components';
import { productsData } from '../../services/product';

const Home = () => {
  const [products, setProducts] = useState({
    status: 'pending...',
    data: null,
  });

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await productsData();
      if (data) {
        setProducts({
          status: 'success!',
          data,
        })
      } else {
        setProducts({
          status: 'error!',
          data: null,
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
    )
  })

  return (
    <div>
      {productsList}
    </div>
  );
}

export default Home;
