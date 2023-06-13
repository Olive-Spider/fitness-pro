import React from 'react';

const ContentComponent = ({ content }) => {
  return (
    <div>
      <div className='flex'>
        <img className='ml-016 ' src={content.icon} alt='icon' />
        {content.icon2 && <img className='w-40 h-3 mt-08 mb-08 ml-09' src={content.icon2} alt='connectline' />}
      </div>
      <div className='flex flex-col w-64 h-06'>
        <h2 className='ml-017 mt-14 font-poppins font-semibold text-xs leading-5 text-neutral-4 flex-none order-none flex-grow-0'>{content.step}</h2>
        <h2 className='mt-15 w-64 h-6 font-poppins font-semibold text-base text-center text-logo flex-none order-none flex-grow-0'>{content.title}</h2>
        <h3 className='mt-03 w-64 h-07 font-poppins font-normal text-sm leading-6 text-center text-n-black flex-none order-1 flex-grow-0'>{content.description}</h3>
      </div>
    </div>
  );
};

export default ContentComponent;
