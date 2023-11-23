import React from 'react'

const WidgetTags = () => {
    const tags=['css','c#','express','html','java','javascript','mern','mongodb','mysql','next.js','php','python','react.js','jquery','c','firebase']
  return (
    <div className='wedge-tags'> 
      <h4>Related Tags</h4>
      <div className="wedge-tags-div">
        {
            tags.map((tag)=>(
                <p key={tag}>{tag}</p>
            ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
