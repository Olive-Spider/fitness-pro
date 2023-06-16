// import React from 'react'
import { NavBar } from './components/home';

const Layout = ({ children }) => {
  return (
    <div className='bg-white dark:bg-black'>
      <div className='max-w-7xl mx-auto'>
        <NavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
