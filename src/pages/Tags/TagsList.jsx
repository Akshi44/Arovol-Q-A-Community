import React from 'react'
import './Tags.css';

const TagsList = ({ tag }) => {
  return (
    <div className='tag' style={{border:'1px solid #d2d2d2',margin:'-1px'}}>
        <h5>{tag.tagName}</h5>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagsList