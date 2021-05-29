import { useState, useEffect } from 'react';
import { Banner, Header, Navbar } from '../../components';
import { userData } from '../../services';
import { StyledLayoutChildren } from './layout.style';

const Layout = ({ children }) => {
  const [user, setUser] = useState({
    status: 'pending...',
    data: [],
  });

  useEffect(() => {
    const getUser = async () => {
      const dataUser = await userData();
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
    getUser();
  }, []);

  return (
    <div>
      <header>
        <Header
          name={user.data.name}
          points={user.data.points}
          variant="points"
        />
        <Banner title="Electronics" banner="/assets/header-x2.png" />
        <Navbar />
      </header>
      <StyledLayoutChildren>
        {children}
      </StyledLayoutChildren>
    </div>
  );
};

export default Layout;
