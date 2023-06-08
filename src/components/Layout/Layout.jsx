import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Page } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header />
      <Page>
        <Outlet />
      </Page>
    </div>
  );
};

export default Layout;
