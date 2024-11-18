import React from 'react'

const Filter = ({onTitleChange, onRatingChange}) => {
  return (
    <div>
        <input 
          type="text"
          placeholder="Filter by title"
          onChange={(e) => onTitleChange(e.target.value)} 
        />
        <input 
          type="number"
          placeholder="Filter by rating"
          onChange={(e)=>onRatingChange(e.target.value)} 
        />
    </div>
  )
}

export default Filter