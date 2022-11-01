import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = (): JSX.Element => (
  <>
    <Header className="header" />
    <main className="main">
      <Outlet />
    </main>
    <footer className="footer">footer</footer>
  </>
);

export default Layout;
