import { useState, useEffect } from 'react';
import { Banner, Header, Navbar } from '../../components';
import { userData } from '../../services';
import { StyledLayout, StyledHeaderContainer, StyledLayoutChildren } from './layout.style';
import useUser from '../../context/user/user.context';

const Layout = ({ children }) => {
  const [user, setUser] = useState({
    status: 'pending...',
    data: [],
  });
  const { setUserContext } = useUser();

  useEffect(() => {
    const getUser = async () => {
      const dataUser = await userData();
      if (dataUser) {
        setUser({
          status: 'success!',
          data: dataUser,
        });
        setUserContext(dataUser);
      } else {
        setUser({
          status: 'error!',
          data: [],
        });
      }
    }
    getUser(); //eslint-disable-next-line
  }, [user]);

  return (
    <StyledLayout>
      <StyledHeaderContainer>
        <Header
          name={user.data.name}
          points={user.data.points}
          variant="points"
        />
        <Banner title="Electronics" banner="/assets/header-x2.png" />
        <Navbar />
      </StyledHeaderContainer>
      <StyledLayoutChildren>
        {children}
      </StyledLayoutChildren>
    </StyledLayout>
  );
};

export default Layout;
