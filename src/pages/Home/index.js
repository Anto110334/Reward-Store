import { Product } from '../../components';
import { ContainerStyled } from './HomeStyle';
import useUser from '../../context/user/user.context';
import useProductsPagination from '../../context/pagination/pagination.context';

const Home = () => {
  const { user } = useUser();
  const { productsPagination } = useProductsPagination();

  const productsList = productsPagination?.currentData().map(product => {
    return (
      <Product
        key={product?._id}
        name={product?.name}
        category={product?.category}
        alt={product?.name}
        photo={product?.img?.url}
        cost={product?.cost}
        UserPoints={user.points}
      />
    );
  });

  return (
      <ContainerStyled>
        {
          !(productsPagination && user) ? <span>Loading...</span>
                              : productsList
        }
      </ContainerStyled>
  );
}

export default Home;
