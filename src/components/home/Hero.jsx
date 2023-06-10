import React from 'react'
import { watchLight } from '../assets'

const Hero = () => {
  return (
    <div className='w-1 h-2 bg-white flex-none flex-grow-0 order-1'>
      <div className='flex flex-col items-start gap-5 w-01 h-01 flex-none order-none flex-grow-0 ml-40'>
        <div className='mt-05'>
        <h1 className='font-poppins font-bold text-base uppercase text-nav-gray leading-4'>Train smarter. get stronger</h1>
        <h1 className='w-01 h-02 font-pro font-bold text-top tracking-tight mt-07'>Simple fitness experience for everyone.</h1>
        <h2 className='h-12 w-02 font-poppins font-normal text-base flex-none order-none flex-grow-0 text-nav-gray mt-06'>Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</h2>
        </div>
        <div className='flex flex-row flex-grow-0 flex-none'>
        <button className='mr-03 flex flex-row justify-center items-center gap-3 pl-6 pr-6 pt-4 pb-4 rounded-full bg-orange w-03 h-12 flex-none order-none flex-grow-0 font-pro text-white font-bold text-base text-center'>Download App</button>
        <button className='order-1 flex flex-grow-0 flex-row justify-center items-center gap-3 pl-6 pr-6 pt-4 pb-4 h-12 w-04 rounded-full border-2 border-solid border-light-gray font-pro font-bold text-base text-logo'>Book a Class</button>
        </div>
        <img src={watchLight} alt="watchlight" className='absolute ml-04'/>
      </div>
    </div>
  )
}

export default Hero