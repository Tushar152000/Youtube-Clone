import React from 'react'

const ChatMessage = ({Name,Message}) => {
  return (
    <>
    
    <div className='flex p-1 items-center '>
      <img  alt='user' className='h-6 cursor-pointer  rounded-lg'
      src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      <span className='font-bold px-2'>{Name}</span>
      <span>{Message}</span>

    </div>
    </>
  )
}

export default ChatMessage
