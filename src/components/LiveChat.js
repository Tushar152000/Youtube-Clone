import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utilis/ChatSlice';
import { generateRandomName } from '../utilis/Helper';
import {AiOutlineSmile,AiFillCaretRight} from 'react-icons/ai';
import {LiaCommentDollarSolid} from 'react-icons/lia';
const LiveChat = () => {
    const dispatch=useDispatch();
    const chatmessage=useSelector((store)=>store.Chat.messages);

    useEffect(()=>{
        const i=setInterval(() => {
               
     dispatch(
        addMessage({
            Name:generateRandomName(),
            Message:'Tushar Chauhan OP 🦸‍♂️ '
        })
     );
        }, 700);
  
     return()=>clearInterval(i);

    },[dispatch]);



    return (
      <>
        <div className='  ml-4 h-[490px] w-[22rem] p-2 border border-black bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse'>
          {chatmessage.map((c, i) => (
            <ChatMessage key={i} Name={c.Name} Message={c.Message} />
          ))}
        </div>
        <div className='ml-4 h-[130px] w-[22rem] p-2 border justify-start border-black rounded-b-lg items-center'>
          <div className='flex gap-2'> <img alt='user' className='h-6 cursor-pointer rounded-lg' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
          <h1 className=' font-bold'>Tushar Chauhan</h1></div>

         <input placeholder='Chat' className='ml-7 border border-b-5 shadow-sm items-start rounded-lg'   type="text" maxLength={15} />
         <div className=' text-2xl flex mt-2 m-1 gap-1'> 
           < AiOutlineSmile/>
           <LiaCommentDollarSolid/>

           <AiFillCaretRight className='justify-end ml-[190px]'/>


           </div>
           <hr className='bg-black-500 shadow-sm'/>

       
</div>

        </>
      )
      
}

export default LiveChat;

