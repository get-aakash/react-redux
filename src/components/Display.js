import React from 'react'

const Display = ({nameList}) => {
  return (
    <div>
      <ul>
        {nameList.map((item,i)=><li key={i}>{item}</li>)}
        
      </ul>
    </div>
  )
}

export default Display
