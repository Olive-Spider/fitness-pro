import React from 'react'
import ContentComponent from './ContentComponent'

const ContentSections = ({ contents }) => {
  return (
    <div className='flex flex-row items-start w-06 h-05 flex-none order-1 flex-grow-0 mt-14'>
        {contents.map((content, index) => (
        <div key={index}>
          {/* Render the ContentComponent and pass the content item */}
          <ContentComponent content={content} />
        </div>
      ))}
    </div>
  )
}

export default ContentSections