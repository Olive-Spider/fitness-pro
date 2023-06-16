<<<<<<< HEAD
import React from 'react'
import ContentComponent from './ContentComponent'

const ContentSections = ({ contents }) => {
  return (
    <div className='flex flex-row items-start w-06 h-05 flex-none order-1 flex-grow-0 mt-14'>
        {contents.map((content, index) => (
=======
import ContentComponent from './ContentComponent';

const ContentSections = ({ contents }) => {
  return (
    <div className='flex flex-row items-start flex-none order-1 flex-grow-0 mt-14'>
      {contents.map((content, index) => (
>>>>>>> e2d90fd (feat: complete responsiveness)
        <div key={index}>
          {/* Render the ContentComponent and pass the content item */}
          <ContentComponent content={content} />
        </div>
      ))}
    </div>
<<<<<<< HEAD
  )
}

export default ContentSections
=======
  );
};

export default ContentSections;
>>>>>>> e2d90fd (feat: complete responsiveness)
