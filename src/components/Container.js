import React from 'react'
import Display from './Display'

const Container = ({nameList}) => {
  return (
    <div>
        <h3>Data Are shown below</h3>
      <Display nameList={nameList} />
    </div>
  )
}

export default Container

