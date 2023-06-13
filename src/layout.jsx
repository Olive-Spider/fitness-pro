// import React from 'react'
import { NavBar } from './components/home';

const Layout = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
