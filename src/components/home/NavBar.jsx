import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../utils/navLink';
import { CiFacebook } from 'react-icons/ci';
import { RiTwitterLine, RiInstagramLine } from 'react-icons/ri';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { vector } from '../../assets';

let activeLink = 'text-black font-bold hover:opacity-50';
let normalLink = 'hover:opacity-50';

export default function NavBar() {
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

  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='pt-4'>
            <div className='flex h-16 justify-between'>
              <div className='flex px-2 lg:px-0'>
                <div className='flex'>
                  <Link to='/' className='flex items-center'>
                    <div className='h-12 w-12 flex items-center '>
                      <img
                        src={vector}
                        alt='vector'
                        className='dark:text-white'
                      />
                    </div>
                    <h2 className='font-semibold text-base'>Fitness Pro</h2>
                  </Link>
                </div>
                <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <ul className='flex items-center justify-center xl:text-base lg:text-sm'>
                        {links.map((link) => {
                          return (
                            <li
                              key={link.name}
                              className='relative group px-3 py-2'
                            >
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
                    <div className='pl-16 '>
                      <button
                        type='button'
                        className='flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500'
                      >
                        <span className='sr-only'>Social Media</span>
                        <div className='w-full'>
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
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden sm:flex flex-1 items-center justify-end px-2 lg:ml-6 lg:justify-end'>
                <div>
                  <div className='flex rounded-full text-sm focus:outline-none space-x-3'>
                    <button className='border border-gray-400 py-1 px-4 rounded-full'>
                      Get trial
                    </button>
                    <div>
                      <button
                        onClick={handleThemeSwitch}
                        className='p-4 bg-black dark:bg-white text-white rounded-full w-12 h-12 flex justify-center items-center'
                      >
                        {theme === 'light' ? (
                          <BsMoonFill />
                        ) : (
                          <BsFillSunFill className='dark:text-black' />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden lg:ml-4 lg:flex lg:items-center'></div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 pt-2 pb-3'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <div>
                <ul className='flex flex-col items-center justify-start xl:text-base lg:text-md md:text-md'>
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
            </div>
            <div className='border-t border-gray-200 pt-4 pb-3'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0'>
                  <div className='flex sm:hidden rounded-full text-sm focus:outline-none space-x-3'>
                    <button className='border border-gray-400 py-1 px-4 rounded-full'>
                      Get trial
                    </button>
                    <div>
                      <button
                        onClick={handleThemeSwitch}
                        className='p-4 bg-black dark:bg-white text-white rounded-full w-12 h-12 flex justify-center items-center'
                      >
                        {theme === 'light' ? (
                          <BsMoonFill />
                        ) : (
                          <BsFillSunFill className='dark:text-black' />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>Social Media</span>
                  <div className='w-full'>
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
                  </div>
                </button>
              </div>
              <div className='mt-3 space-y-1'></div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
