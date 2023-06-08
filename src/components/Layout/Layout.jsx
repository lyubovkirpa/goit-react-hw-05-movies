import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Page } from './Layout.styled';
import { Suspense } from 'react';


const Layout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={null}>
        <Page>
          <Outlet />
        </Page>
      </Suspense>
    </>
  );
};

export default Layout;
