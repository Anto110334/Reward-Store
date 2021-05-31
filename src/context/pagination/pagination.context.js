import { useContext } from 'react';
import AppContext from '../index';

const useProductsPagination= () => {
  const [storage, setStorage] = useContext(AppContext);

  const setProductsPagination= productsPagination => {
    setStorage(
      (prevState) => (
        {...prevState, productsPagination}
      )
    );
  }

  return {
    productsPagination: storage.productsPagination,
    setProductsPagination,
  }
}

export default useProductsPagination;
