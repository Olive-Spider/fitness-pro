
const ContentComponent = ({ content }) => {
  return (
       <div className="grid grid-cols-1 gap-4">
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
            <h2 className='font-poppins text-xs text-center leading-5 text-neutral-4 flex-none order-none flex-grow-0'>
              {content.step}
            </h2>
            <h3 className='font-poppins font-semibold text-base text-center text-logo flex-none order-none flex-grow-0'>
              {content.title}
            </h3>
            <p className='h-07 font-poppins font-normal text-sm leading-6 text-center text-n-black flex-none order-1 flex-grow-0'>
              {content.description}
            </p>
          </div>
        </div>

  
  );
};

export default ContentComponent;
