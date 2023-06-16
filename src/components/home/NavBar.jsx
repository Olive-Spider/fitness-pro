
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../utils/navLink';
import { CiFacebook } from 'react-icons/ci';
import { RiTwitterLine, RiInstagramLine } from 'react-icons/ri';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { Logo, LogoWhite } from '../../assets';
import { useTheme } from '../../context/ThemeContext';

let activeLink = 'text-black dark:text-white font-bold hover:opacity-50';
let normalLink = 'hover:opacity-50';

export default function NavBar() {

	const { theme, handleThemeSwitch }= useTheme();


  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='pt-4'>
            <div className='flex h-16 justify-between'>
              <div className='flex flex-none flex-grow-0 px-2 lg:px-0'>
                <Link to='/' className='flex items-center'>
                  <div>
                    {theme === 'light' ? (
                      <div className='h-12 w-12 flex items-center'>
                        <img src={Logo} />
                      </div>
                    ) : (
                      <div className='h-12 w-12 flex items-center'>
                        <img src={LogoWhite} />
                      </div>
                    )}
                  </div>
                  <h2 className='font-semibold text-sm dark:text-white'>
                    Fitness Pro
                  </h2>
                </Link>
                <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <ul className='flex items-center justify-center xl:text-base lg:text-sm dark:text-white'>
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
                    <button className='border border-gray-400 py-1 px-4 flex-none flex-grow-0  rounded-full dark:text-white'>
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
                <ul className='flex flex-col items-center justify-start xl:text-base lg:text-md md:text-md dark:text-white'>
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
                <div className='flex items-center justify-between w-full'>
                  <div>
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

                  <div className='flex sm:hidden rounded-full text-sm focus:outline-none space-x-3'>
                    <button className='border border-gray-400 py-1 px-4  flex-none flex-grow-0 rounded-full dark:text-white'>
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
              <div className='mt-3 space-y-1'></div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
