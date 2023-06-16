import {
  downloadicon,
  keyicon,
  medalicon,
  timericon,
  connectline,
} from '../../assets';

const Content = () => {
  return (
    <div className='flex space-x-10 py-20 '>
      <div className='flex w-full space-x-4 pb-10 overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/20'>
        <div className='w-64 flex flex-col flex-none flex-grow-0 space-y-20'>
          {/* Render the ContentComponent and pass the content item */}
          <div className='relative flex justify-center items-center'>
            <div>
              <img className='' src={downloadicon} alt='icon' />
            </div>
            <div>
              <img className='absolute pl-3' src={connectline} alt='icon' />
            </div>
          </div>
          <div className='flex flex-col space-y-6'>
            <h2 className='text-xs text-center leading-5 text-neutral-4 dark:text-white'>
              Step 1
            </h2>
            <h3 className='font-semibold text-base text-center  dark:text-white'>
              Download
            </h3>
            <p className=' font-normal text-sm leading-6 text-center dark:text-white '>
              Fitness Pro tracks your workouts, get better results, and be the
              best version of you.{' '}
            </p>
          </div>
        </div>
        <div className='w-64 flex flex-col flex-none flex-grow-0 space-y-20'>
          {/* Render the ContentComponent and pass the content item */}
          <div className='relative flex justify-center items-center'>
            <div>
              <img className='' src={keyicon} alt='icon' />
            </div>
            <div>
              <img className='absolute pl-3' src={connectline} alt='icon' />
            </div>
          </div>
          <div className='flex flex-col space-y-6'>
            <h2 className='text-xs text-center leading-5 text-neutral-4 dark:text-white'>
              Step 2
            </h2>
            <h3 className='font-semibold text-base text-center  dark:text-white'>
              Choose your trainer
            </h3>
            <p className=' font-normal text-sm leading-6 text-center dark:text-white '>
              Fitness Pro tracks your workouts, get better results, and be the
              best version of you.{' '}
            </p>
          </div>
        </div>
        <div className='w-64 flex flex-col flex-none flex-grow-0 space-y-20'>
          {/* Render the ContentComponent and pass the content item */}
          <div className='relative flex justify-center items-center'>
            <div>
              <img className='' src={medalicon} alt='icon' />
            </div>
            <div>
              <img className='absolute pl-3' src={connectline} alt='icon' />
            </div>
          </div>
          <div className='flex flex-col space-y-6'>
            <h2 className='text-xs text-center leading-5 text-neutral-4 dark:text-white'>
              Step 3
            </h2>
            <h3 className='font-semibold text-base text-center  dark:text-white'>
              Set the goals
            </h3>
            <p className=' font-normal text-sm leading-6 text-center dark:text-white '>
              Fitness Pro tracks your workouts, get better results, and be the
              best version of you.{' '}
            </p>
          </div>
        </div>
        <div className='w-64 flex flex-col space-y-20 flex-none flex-grow-0'>
          {/* Render the ContentComponent and pass the content item */}
          <div className='flex items-center justify-center'>
            <div>
              <img className='' src={timericon} alt='icon' />
            </div>
          </div>
          <div className='flex flex-col space-y-6'>
            <h2 className='text-xs text-center leading-5 text-neutral-4 dark:text-white'>
              Step 4
            </h2>
            <h3 className='font-semibold text-base text-center  dark:text-white'>
              Download
            </h3>
            <p className=' font-normal text-sm leading-6 text-center dark:text-white '>
              Fitness Pro tracks your workouts, get better results, and be the
              best version of you.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
