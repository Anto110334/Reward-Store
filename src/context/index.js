import { useState, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = props => {
  const [storage, setStorage] = useState(
    {
      user: null,
      products: null,
      productsPagination: null
    }
  );

  return (
    <AppContext.Provider value={[storage, setStorage]}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
