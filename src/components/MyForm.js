import React, { useState } from 'react'

const MyForm = ({addToList}) => {
    const[name, setName] = useState('')
    const handleOnChange=(e)=>{
        const{value} = e.target
        setName(value)
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault(e)
        addToList(name)
    }
    console.log(name)
  return (
    <div>
      <form onSubmit={handleOnSubmit} >
        <input onChange={handleOnChange} type="text" name='name' placeholder='sam smith' />
        <button>Add Data</button>
      </form>
    </div>
  )
}

export default MyForm
