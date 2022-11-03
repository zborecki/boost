import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Wrapper } from '../components/styled.components';

const Layout = (): JSX.Element => (
  <>
    <Header className="header" />
    <Wrapper
      className="main"
      as="main"
    >
      <Outlet />
      <footer className="footer">--- footer ---</footer>
    </Wrapper>
  </>
);

export default Layout;
