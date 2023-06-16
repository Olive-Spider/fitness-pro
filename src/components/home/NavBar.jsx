import { Link, NavLink } from 'react-router-dom';
import { vector } from '../../assets';
import { links } from '../../utils/navLink';
import { CiFacebook } from 'react-icons/ci';
import { RiTwitterLine, RiInstagramLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // theme state
  const [theme, setTheme] = useState('light');

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    } else {
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  // handle switch theme
  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    console.log('clicked');
    setShowMenu(!showMenu);
  };

  let activeLink = 'text-black font-bold hover:opacity-50';
  let normalLink = 'hover:opacity-50';

  return (
    <header className='dark:bg-black pt-10'>
      <div className='hidden md:flex justify-between items-center'>
        <div className='flex space-x-2'>
          <Link to='/' className='flex items-center space-x-3'>
            <div>
              <img src={vector} alt='vector' />
            </div>
            <h2 className='text-logo font-semibold text-2xl font-poppins'>
              Fitness Pro
            </h2>
          </Link>
        </div>

        <div>
          <ul className='flex items-center justify-center xl:text-base lg:text-md md:text-md'>
            {links.map((link) => {
              return (
                <li key={link.name} className='relative group px-5 py-2'>
                  <NavLink
                    to={`${link.link}`}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='flex items-center space-x-3'>
          <ul className='flex item-center space-x-4'>
            <Link to='/'>
              <CiFacebook />
            </Link>
            <Link to='/'>
              <RiTwitterLine />
            </Link>
            <Link to='/'>
              <RiInstagramLine />
            </Link>
          </ul>
          <div className='flex space-x-2'>
            <button className='border border-nav-gray py-2 px-4 rounded-full'>
              Get trial
            </button>
            <div>
              <button
                onClick={handleThemeSwitch}
                className='p-4 bg-black dark:bg-white text-white rounded-full w-12 h-12 flex justify-center items-center'
              >
                {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill className='dark:text-black'/>}
              </button>
            </div>
          </div>
          {/* button */}
        </div>
      </div>

      {/* Mobile menu */}
      <div className=' flex justify-between items-center md:invisible w-5/6 mx-auto'>
        <GiHamburgerMenu onClick={toggleMenu} />
        <div>
          <img src={vector} alt='vector' />
        </div>
      </div>

      <div
        className='absolute bg-white h-full top-30 sm:flex p-5 sm:p-0 w-[100%]'
        style={showMenu ? { display: 'block' } : { display: 'none' }}
      >
        <div className='flex flex-col w-11/12 mx-auto justify-between gap-6  font-jost'>
          <div className='mt-4'>
            <RxCross2 onClick={toggleMenu} className='h-10 w-10' />
          </div>

          <div className='flex flex-col justify-between pb-6 '>
            <div className='flex  mx-auto '>
              <nav className='flex flex-col space-y-4'>
                <ul className='flex flex-col items-center justify-center xl:text-base lg:text-md md:text-md'>
                  {links.map((link) => {
                    return (
                      <li key={link.name} className='relative group px-5 py-2'>
                        <NavLink
                          to={`${link.link}`}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
                <div className='flex items-center space-x-3'>
                  <ul className='flex item-center space-x-4'>
                    <Link to='/'>
                      <CiFacebook />
                    </Link>
                    <Link to='/'>
                      <RiTwitterLine />
                    </Link>
                    <Link to='/'>
                      <RiInstagramLine />
                    </Link>
                  </ul>
                  <div className='flex flex-col space-y-2'>
                    <button className='border border-nav-gray py-2 px-4 rounded-full'>
                      Get trial
                    </button>
                    <div>
                      <button
                        onClick={handleThemeSwitch}
                        className='p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center'
                      >
                        {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
