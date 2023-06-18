const ContentSections = ({ contents }) => {
  return (
    <div className='container flex space-x-10 py-20 max-w-7xl '>
      <div className='flex w-full space-x-4 pb-10 hide-scroll-bar  overflow-x-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/20'>
        {contents.map((content, index) => (
          <div
            key={index}
            className='w-64 flex flex-col flex-none flex-grow-0 space-y-20'
          >
            {/* Render the ContentComponent and pass the content item */}
            <div className='relative flex justify-center items-center'>
              <div>
                <img className='' src={content.icon} alt='icon' />
              </div>
              <div>
                {content.icon2 && (
                  <img
                    className='absolute pl-3'
                    src={content.icon2}
                    alt='connectline'
                  />
                )}
              </div>
            </div>
            <div className='flex flex-col space-y-6'>
              <h2 className='text-xs text-center leading-5 text-neutral-4 dark:text-white'>
                {content.step}{' '}
              </h2>
              <h3 className='font-semibold text-base text-center  dark:text-white'>
                {content.title}{' '}
              </h3>
              <p className=' font-normal text-sm leading-6 text-center dark:text-white '>
                {content.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSections;
