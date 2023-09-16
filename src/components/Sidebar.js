import React from 'react'
import {AiTwotoneHome,AiFillPlayCircle} from "react-icons/ai";
import {MdSubscriptions,MdOutlineFeedback} from 'react-icons/md';
import {SiYoutubemusic} from 'react-icons/si';
import {BiTrendingUp,BiSolidCameraMovie,BiNews,BiHelpCircle} from 'react-icons/bi';
import {AiFillShopping ,AiOutlineTrophy,AiOutlineSetting} from 'react-icons/ai';
import {BsMusicNote} from 'react-icons/bs';
import {GiGamepad,GiHanger} from 'react-icons/gi';
import {GoReport} from 'react-icons/go';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  
  return (
    <div className='p-1 shadow-lg col-span-1'>
      <h1 className='font-bold'>Access</h1>
      <ul className=' m-4'>
      <li className='flex gap-3'><Link to="/"><AiTwotoneHome/> Home </Link> </li> 
        <li className='flex gap-3 '> <AiFillPlayCircle/>Shorts</li>
        <li className='flex gap-3 '> <MdSubscriptions/>Subscription</li>
        <li className='flex gap-3'><SiYoutubemusic/>Music </li>
      </ul>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700'/>
      <h1 className="font-bold">Explore</h1>
      <ul className=' m-4 overflow-auto'>
        <li className='flex gap-3'> <BiTrendingUp/>Trending </li>
        <li className='flex gap-3'> <AiFillShopping/>Shopping</li>
        <li className='flex gap-3' > <BsMusicNote/> Music</li>
        <li className='flex gap-3'> <BiSolidCameraMovie/>Movie</li>
        <li className='flex gap-3'> <GiGamepad/>Gaming</li>
        <li className='flex gap-3'><BiNews/> News</li>
        <li className='flex gap-3'> <AiOutlineTrophy/>Sports</li>
        <li className='flex gap-3'><GiHanger/>Fashion & Beauty</li>
        
      </ul>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700'/>
      <h1 className="font-bold">Subscriptions</h1>
      <ul className=' m-4' >
        <li className='flex gap-3'>Carry Minati</li>
        <li className='flex gap-3'>Aditya Verma</li>
        <li className='flex gap-3'>Edit with Rachit</li>
        <li className='flex gap-3'>Rachit Singh</li>
        <li className='flex gap-3'>Pranjal Kamra</li>
        <li className='flex gap-3'>Anuj Bhaiya </li>
        <li className='flex gap-3'>Hello World</li>

      </ul>
      <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700'/>
      <ul className=' m-4' >
        <li className='flex gap-3'> <AiOutlineSetting/>Setting</li>
        <li className='flex gap-3'><GoReport/>Report</li>
        <li className='flex gap-3'><BiHelpCircle/>Help</li>
        <li className='flex gap-3'><MdOutlineFeedback/>Send Feedback</li>

      </ul>


      
    </div>
  )
}

export default Sidebar;

