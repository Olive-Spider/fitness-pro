const ContentSections = ({ contents }) => {
  return (
    <div className='flex space-x-10 pb-10 overflow-x-scroll overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/20'>
      {contents.map((content, index) => (
        <div key={index} className='flex flex-shrink-0 mx-auto'>
          <div className='w-[30px]'>
            {/* Render the ContentComponent and pass the content item */}
            {/* <div className='flex'>
            <img className='ml-016 ' src={content.icon} alt='icon' />
            {content.icon2 && (
              <img
                className='w-40 h-3 mt-08 mb-08 ml-09'
                src={content.icon2}
                alt='connectline'
              />
            )}
          </div> */}
            <div className='flex flex-col space-y-6'>
              <h2 className='text-xs text-center leading-5 text-neutral-4 dark:text-white'>
                {content.step}
              </h2>
              <h3 className='font-semibold text-base text-center  dark:text-white'>
                {content.title}
              </h3>
              <p className='font-normal text-sm leading-6 text-center dark:text-white '>
                {content.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentSections;
