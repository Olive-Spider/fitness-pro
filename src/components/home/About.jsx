import ContentSections from './ContentSections';
import {
  downloadicon,
  keyicon,
  medalicon,
  timericon,
  connectline,
} from '../../assets';

const About = () => {
    const contents = [
      {
        id: 1,
        icon: downloadicon,
        icon2: connectline,
        step: 'Step 1',
        title: 'Download',
        description:
          'Fitness Pro tracks your workouts, get better results, and be the best version of you.',
      },
      {
        id: 2,
        icon: keyicon,
        icon2: connectline,
        step: 'Step 2',
        title: 'Choose your trainer',
        description:
          'Fitness Pro tracks your workouts, get better results, and be the best version of you.',
      },
      {
        id: 3,
        icon: medalicon,
        icon2: connectline,
        step: 'Step 3',
        title: 'Set the goals',
        description:
          'Fitness Pro tracks your workouts, get better results, and be the best version of you.',
      },
      {
        id: 4,
        icon: timericon,
        step: 'Step 4',
        title: 'Workout time',
        description:
          'Fitness Pro tracks your workouts, get better results, and be the best version of you.',
      },
    ];

    const modifiedContents = contents.map((content, index) => {
      if (index === contents.length - 1) {
        const { icon2, ...rest } = content;
        return rest;
      }
      return content;
    });

  return (
    <div className='flex flex-col justify-center items-center py-10'>
      <div className='flex flex-col items-center gap-5'>
        <h2 className='font-bold h-14 text-5xl leading-12 text-center tracking-tight dark:text-white'>
          How it works
        </h2>
        <h3 className='font-poppins h-12 font-normal text-base text-center text-n-black dark:text-white'>
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </h3>
      </div>
      <div className='container max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex flex-row items-start'>
        {/* Render the ContentSections component and pass the modified content data */}
        <ContentSections contents={modifiedContents}/>
    
      </div>
    </div>
  );
};

export default About;
