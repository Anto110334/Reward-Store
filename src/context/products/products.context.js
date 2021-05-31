import { useContext } from 'react';
import AppContext from '../index';

const useProducts= () => {
  const [storage, setStorage] = useContext(AppContext);

  const setProductContext= product => {
    setStorage(
      (prevState) => (
        {...prevState, product}
      )
    );
  }

  return {
    products: storage.products,
    setProductContext,
  }
}

export default useProducts;
