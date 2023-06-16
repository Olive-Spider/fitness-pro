// import { watchLight } from '../../assets'

// const Hero = () => {
//   return (
//     <div className='w-1 h-2 flex-none flex-grow-0 order-1'>
//       <div className='flex flex-col items-start gap-5 w-01 h-01 flex-none order-none flex-grow-0 ml-40'>
//         <div className='mt-05'>
//         <h1 className='font-poppins font-bold text-base uppercase text-nav-gray leading-4'>Train smarter. get stronger</h1>
//         <h1 className='w-01 h-02 font-bold text-top tracking-tight mt-07'>Simple fitness experience for everyone.</h1>
//         <h2 className='h-12 w-02 font-poppins font-normal text-base flex-none order-none flex-grow-0 text-nav-gray mt-06'>Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</h2>
//         </div>
//         <div className='flex flex-row flex-grow-0 flex-none'>
//         <button className='mr-03 flex flex-row justify-center items-center gap-3 pl-6 pr-6 pt-4 pb-4 rounded-full bg-orange w-03 h-12 flex-none order-none flex-grow-0 font-pro text-white font-bold text-base text-center'>Download App</button>
//         <button className='order-1 flex flex-grow-0 flex-row justify-center items-center gap-3 pl-6 pr-6 pt-4 pb-4 h-12 w-04 rounded-full border-2 border-solid border-light-gray font-pro font-bold text-base text-logo'>Book a Class</button>
//         </div>
//         <img src={watchLight} alt="watchlight" className='absolute ml-04'/>
//       </div>
//     </div>
//   )
// }

// export default Hero

import { watchLight, watchLightDark } from '../../assets';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {

	const { theme } = useTheme();
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 space-y-6 md:grid-cols-2 space-x-10 py-2 h-fit overflow-hidden'>
        <div className='flex flex-col justify-center item-center space-y-4 ss:mt-8 md:mt-0'>
          <h1 className='font-bold text-base uppercase text-gray-400 leading-4'>
            Train smarter. get stronger
          </h1>
          <h2 className='text-3xl md:text-4xl text-black dark:text-white font-bold'>
            Simple fitness experience for everyone.
          </h2>
          <p className='text-gray-500 '>
            Track your workouts, get better results, and be the best version of
            you. Less thinking, more lifting.
          </p>
          <div className='flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row items-center justify-start w-full'>
            <button className=' bg-primary text-white rounded-full flex-none flex-grow-0  w-full md:w-44 px-6 py-3 text-[0.9rem] font-semibold xl:text-base '>
              Download App{' '}
            </button>
            <button className='border border-black dark:border-white dark:text-white text-black flex-none flex-grow-0  w-full md:w-44 text-[0.9rem] font-semibold rounded-full px-6 py-3 text-sm xl:text-base '>
              Book a class{' '}
            </button>
          </div>
        </div>
        <div className='flex item-center '>
          <div>
            {theme === 'light' ? (
              <img
                src={watchLight}
                alt='watchlight'
                className='object-contain w-full h-full'
              />
            ) : (
              <img
                src={watchLightDark}
                alt='watchlight'
                className='object-contain w-full h-full'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
