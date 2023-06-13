import React from 'react';
import ContentSections from './ContentSections';
import { downloadicon, keyicon, medalicon, timericon, connectline } from '../assets';

const About = () => {
  const contents = [
    {id: 1, icon: downloadicon, icon2: connectline, step: 'Step 1', title: 'Download', description: 'Fitness Pro tracks your workouts, get better results, and be the best version of you.'},
    {id: 2, icon: keyicon, icon2: connectline, step: 'Step 2', title: 'Choose your trainer', description: 'Fitness Pro tracks your workouts, get better results, and be the best version of you.'},
    {id: 3, icon: medalicon, icon2: connectline, step: 'Step 3', title: 'Set the goals', description: 'Fitness Pro tracks your workouts, get better results, and be the best version of you.'},
    {id: 4, icon: timericon, step: 'Step 4', title: 'Workout time', description: 'Fitness Pro tracks your workouts, get better results, and be the best version of you.'}
  ];

  const modifiedContents = contents.map((content, index) => {
    if (index === contents.length - 1) {
      const { icon2, ...rest } = content;
      return rest;
    }
    return content;
  });

  return (
    <div className='flex flex-col justify-center items-center gap-01 w-1 h-03 pb-01 pt-01 pl-40 pr-40 bg-white flex-none order-3 flex-grow-0'>
      <div className='flex flex-col items-center gap-5 p-0 w-05 h-04 flex-none order-none flex-grow-0'>
        <h2 className='font-pro font-bold h-14 w-05 text-5xl leading-12 text-center tracking-tight text-logo flex-none order-none flex-grow-0'>How it works</h2>
        <h3 className='font-poppins h-12 w-05 font-normal text-base text-center text-n-black flex-none order-1 flex-grow-0'>Stacks is a production-ready library of stackable content blocks built in React Native.</h3>
      </div>
      <div>
        {/* Render the ContentSections component and pass the modified content data */}
        <ContentSections contents={modifiedContents} />
        {/* Render the ContentSections component again in a different section */}
      </div>
    </div>
  );
};

export default About;