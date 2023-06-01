import { useState} from 'react'

import { vector, divider, instagram, twitter, facebook, navbutton, arrow } from "../assets";

const NavBar = () => {
  return (
    <nav className="bg-white flex-grow-0 flex-none order-0 h-1 w-1 gap-1">
        <img src={vector} alt="vector" className="absolute mt-14 mb-14 ml-40"/>
        <h2 className='absolute mt-14 mb-14 ml-1 text-logo font-semibold text-2xl font-poppins tracking-tight w-32 h-8 flex-none flex-grow-0 order-1 leading-8' >Fitness Pro</h2>
        <img src={divider} alt='divider' className='absolute w-px h-12 bg-light-gray flex-none flex-grow-0 mt-12 mb-12 ml-2'/>
        <ul className='absolute font-pro font-bold text-sm leading-4 text-nav-gray w-11 h-4 flex-none order-none flex-grow-0 mt-16 mb-16 ml-3'>
          <a className='mr-12'>Features</a>
          <a className='mr-12'>Pricing</a>
          <a className='mr-12'>Download</a>
          <a className='mr-4'>Class</a>
          <a>Lifestyle</a>
        </ul>
        <ul>
          <a><img src={facebook} alt="facebook" className='absolute ml-5 mt-6'/></a>
          <a><img src={twitter} alt="twitter" className='absolute ml-7 mt-6'/></a>
          <a><img src={instagram} alt="instagram" className='absolute ml-8 mt-6'/></a>
          <a><img src={navbutton} alt="navbutton" className='absolute ml-9 mt-10'/></a>
        </ul>
    </nav>
  )
}

export default NavBar