import React from 'react';
import Footer from 'components/molecules/footer';
import Header from 'components/molecules/header';
import './style.scss'

type NWPropsType = {
  children?: React.ReactNode;
}

function NavbarWrapper({ children }: NWPropsType) {
  return (
    <>
      <Header />
      <section className="children">{children}</section>
      <Footer />
    </>
  );
}

export default NavbarWrapper;
