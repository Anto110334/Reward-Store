import { useState, useEffect } from 'react';
import { userData, productsData } from '../../services';
// import { Product } from '../../components';

const Home = () => {
  const [products, setProducts] = useState({
    status: 'pending...',
    data: null,
  });
  const [user, setUser] = useState({
    status: 'pending...',
    data: null,
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
        console.log("products data: ", products?.data);
      } else {
        setProducts({
          status: 'error!',
          data: null,
        })
      }
      if (dataUser) {
        setUser({
          status: 'success!',
          data: dataUser,
        })
        console.log("user data: ", user?.data);
      } else {
        setUser({
          status: 'error!',
          data: null,
        })
      }
    }
    getAllProducts();
  }, []);

  // const productsList = products?.data.map(product => {
  //   return (
  //     <Product
  //       key={product?._id}
  //       name={product?.name}
  //       category={product?.category}
  //       alt={product?.name}
  //       photo={product?.img?.url}
  //     />
  //   );
  // });

  /* TODO: descomentar esto y ver cómo manejar el tiempo de la response */

  return (
    <div>
      {/* {products?.status === 'pending...' && products?.data === null ? <span>Loading...</span> : (
        products?.status === 'error!' && products?.data === null ? <span>Result not found</span> : (
          products?.status === 'success!' && products?.data ? productsList : null
        )
      )} */}
    </div>
  );
}

export default Home;
