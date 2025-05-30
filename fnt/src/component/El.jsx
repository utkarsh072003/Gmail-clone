import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { MdOutlineStarBorder } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedEmail } from '../redux/appSlice';



const El = ({email}) => {
   const navigate= useNavigate();
   const dispatch = useDispatch(); 
   const openMail=()=>{
     navigate(`/mail/${email._id}`);
     dispatch(setSelectedEmail(email))
   }

  return (
    <div  onClick={openMail} className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer'>
      <div className='flex items-center gap-2'>
       <div className='text-gray-400'>
        <MdCropSquare size={'20px'}/>
       </div>
       <div className='text-gray-400'>
        <MdOutlineStarBorder size={'20px'}/>
       </div>
       <div>
       <h1 className='font-semibold'>{email?.subject}</h1>
       </div>
      </div>
      <div className='flex-1 ml-4'>
        <p>{email?.message}</p>
      </div>
      <div className='flex-none text-gray text-sm'>
        <p>{email?.createdAt}</p>
      </div>
    </div>
  )
}

export default El
