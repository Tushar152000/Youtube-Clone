import React from 'react'
import ButtonList from './ButtonList';
import Video from './Video'
// import Dictaphone from './Dictaphone';
const MainContainer = () => {
  return (
    <div className='col-span-11'>
        <ButtonList/>
        <Video className='overflowY:hidden'/>
      {/* <Dictaphone/> */}
      
    </div>
  )
}

export default MainContainer
