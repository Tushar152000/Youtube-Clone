import React, { useEffect, useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi';
import { toggleMenu } from '../utilis/appslice';
import { useDispatch, useSelector } from 'react-redux';
import {MdKeyboardVoice} from 'react-icons/md';
import { YOUTUBE_Suggestion_API } from '../utilis/constant';
import {AiOutlineSearch} from "react-icons/ai";
import { chacheResult } from '../utilis/SearchSlice';
// import Dictaphone from './Dictaphone';


const  Header = () => {
const[SearchQuery,SetSearchQuery]=useState("");
const[Suggestion,setSuggestion]=useState([]);
const [ShowSuggestion,SetShowSuggestion]=useState(false);
const searchCaches=useSelector((store)=>store.search);

  useEffect(()=>{    
   const timer=setTimeout(() => {
    if(searchCaches[SearchQuery]){
      setSuggestion(searchCaches[SearchQuery]);
    }
    else{
    getapi();
    }
  }, 200);
  
  return()=>{
    clearTimeout(timer);
  }
  },[SearchQuery]);
  const dispatch= useDispatch();

  const getapi= async ()=>{

     console.log("Api call -"+SearchQuery);
    const data=await fetch(YOUTUBE_Suggestion_API + SearchQuery);
    const json= await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);
    //update the Catch
    dispatch(chacheResult({
      [SearchQuery]:json[1],
    }))
  }
 
  
   


  const toggleMenuHandler=()=>{

    dispatch(toggleMenu());

  };



  return (
    <>
    
    <div className='grid grid-flow-col p-1 m-1 shadow-lg'>
      <div className='flex  col-span-1'>
      <img  onClick={()=>toggleMenuHandler()} 
        className='h-8  mt-1 border-black-500 ml-2 rounded-full cursor:pointerbtn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all' src='https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg' alt='Menu'/>
        <a href="./">
      <img  className='h-12 mt-1 ml-5 ' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="logo"/>
      </a>
    </div>  
    <div className="col-span-10 ml-7  items-center">
  <input
    className="w-9/12 text-center rounded-l-full border py-1 mt-2  border-gray-500"
    type="text"
    placeholder="Search"
    value={SearchQuery}
     onChange={(e)=>{
      SetSearchQuery(e.target.value)}}
    onFocus={()=>{
    
      SetShowSuggestion(true)
    }
    }
    onBlur={()=>
      {
        SetShowSuggestion(false)}}
   defaultValue="Search..."
  />
  <button className="p-2 mt-1 border border-black-300 rounded-r-full hover:scale-105 transition-tranform border-gray-500">
  <BiSearchAlt2 />
</button>
  <button className='p-2 border mb-3  border-black-500 ml-6 rounded-full cursor:pointerbtn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all '
  >{<MdKeyboardVoice/>}</button>
  { (Suggestion.length>0 && ShowSuggestion) &&(
 <div style={{ overflowY: 'hidden', zIndex: 2 }} className='fixed bg-white py-2 px-5 w-[46rem] rounded-lg border border-gray-400' >
  <ul >
    {Suggestion.map(s=><li  key={s.index} className='flex gap-3 items-center hover:bg-gray-200 '><AiOutlineSearch/>{s}</li>)}
  </ul>
</div>
)}
</div>



    <div className='flex gap-2 p-3 ' > 
       <img className='h-9 gap-5 cursor-pointer' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAClpaXn5+fj4+P5+fnMzMzGxsbs7Oz19fUXFxccHBwRERH6+vpBQUHy8vK4uLhJSUm7u7uysrJ2dnaGhobc3NwmJiYJCQlcXFxVVVVsbGybm5szMzPKysphYWGSkpJPT085OTmTk5MsLCxGRkapqal1QgInAAAEf0lEQVR4nO2dCXLiMBBFI9aYZUjCkgTIQkK4/xEnLsoDBrzh1v8y898J9MrW0i2pdXcnhBBCCCGEEEJg6fbmq+XjcrVesFvih2g+dAlvLXZrPLBzad7ZDTKm++FO+WS3yZTxnzNB51bsVlmyvCDo3JzdLDs+Lwo698RumBWdDEE3jNhNM2KWZejW7KbZMMkUdKMxu3EmnM6Ex/TZjTNhlWN4G8PpIMfwi904E3IEnWM3zgQZNh8ZNh8ZNp8bN2xPs9fdMbNpm93EOrTXm1y9PZtWUyX7lyP7SywbuAIf74bFYkc8TxsWSE2fK/nFbB/Yja5A71JqrZjHpuTCu3kBYT4zdttL0X+5WtC5YY/d/GLmNfxivtkCBUSPNQV/Z46gB9XFqLbg75/aYWtk0zfwiwm2Mz4YCQabZLQTDFTRUjBIxXdTQeeCW98sjAWdu2crpZlUiyTK8NZlS6XYmAs698GWOqbuUu0yAe0uWs30pwQz2uRsgdZjEEpXPD8rY0Ug8eKTN8FAJv6uR0E3ZNvF5Gd86xLANrj9YiYNP1tcPu17HfR539dUeIAdDv94N1xyBf1/QvZHvC65XQ3qR+wBBLnL01eIIfEwcebBUWN44X7W2V9raIFit/om4XW8sRL9iKliD2vCuH6fsCqkODGCCTrHCfZtk9z5cCJhf8mLczi/KVCQczrMeqMiH8Zo6icLnMUnwfALavgHL9iGCroX/NoU2w0ZHRG16k7An7PBhIYH4Dm3CBVXJGzRdxXBA43Dh8HogQY/1KzhhugiBdgVTQx6j8b3dsU5r2BD9FD6O5iCDeGC6ADK68ZvBthMBioXfAz2YC1mwyINdkL0ef4iC2wVjSnBcAo1zKuT4IudDE1pEQyxC1MZylCGMpShDGUoQxnKUIYylKEMZShDGcpQhjKUoQxlKEMZylCGMpShDGUoQxnKUIYyvCXDb4Ihtu4A7qL6AWx5jC3B8A0pOCYIOoesHYGrF3EM8mFPvzXasgBeyp9YlO2uzgB3BRF/cW0PbEac1HkboA4j1Efk9MIYUE/kDKR7IMOp71KQ+QAuP3U442jC0HstzDZX0L/iPdkvxuu1dca1wzNGHr9iJ+/RVBz+ftQ2a6Y/ZeTpR8UXisjGy1ckTxNpRh7mxXYYfTBhYP4VQ5gm0hj3xZD6YILpVwxkmkgzMOyL9yENMgcMJw1ExedrMCvixgwI87EqicmL6YuwivlD/Umd+7l5Q6uOiCzFWg2rzRpGmY9ymD2wyxbJYmQlSE6vZWP4pEDP/uG4+jybFh2KWvUfibVl0wrlQS8hhBDif6fkQzTkd8dqUa72Prq6rCXllnqBvDZ6FeUyPNhygbaUi53ZLxzWodyeMeu9KhPKnENt8kBT7jcN4s3fqxkXb4yj63RbU1zKFVse2ANF6eRm98KYguHU17EKJPmFsZs8F/4j736NWdKaS/aU0fhRJiEjobxlPoNrTHRpCT6/rZTu4nSLboZ96gDBpLVJftbBZjdhN8cP0aL3NH3oLW5UTwghhBBCCCFEyPwFBl5aCHRwZhEAAAAASUVORK5CYII=' alt='notication'/>
      <img  alt='user' className='h-9 cursor-pointer   hover:bg-sky-200 text-2xl rounded-lg'src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
    </div>
    </div>
   
    </>
    
  )
}

export default Header;

