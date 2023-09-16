import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 py-1 m-1  bg-gray-200 rounded-lg hover:bg-gray-400 hover:shadow-2xl'>{name} </button>
    </div>
  )
}

export default Button
