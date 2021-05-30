import { useContext } from 'react';
import AppContext from '../index';

const useUser= () => {
  const [storage, setStorage] = useContext(AppContext);

  const setUserContext= user => {
    setStorage(
      (prevState) => (
        {...prevState, user}
      )
    );
  }

  return {
    user: storage.user,
    setUserContext,
  }
}

export default useUser;
