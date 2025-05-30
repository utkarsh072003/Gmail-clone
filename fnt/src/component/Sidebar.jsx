import React from 'react'
import { IoMdStar } from 'react-icons/io';
import { LuPencil } from "react-icons/lu";
import { MdInbox,  MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const sidebarItems=[
    {
      icon:<MdInbox size={'20px'}/>,
      text:"Inbox"
    },
    {
      icon:<IoMdStar size={'20px'}/>,
      text:"Starred"
    },
    {
      icon:<MdOutlineWatchLater size={'20px'}/>,
      text:"Snoozed"
    },
    {
      icon:<TbSend2 size={'20px'}/>,
      text:"Sent"
    },
    {
      icon:<MdOutlineDrafts size={'20px'}/>,
      text:"Drafts"
    },
    {
      icon:<MdOutlineKeyboardArrowDown size={'20px'}/>,
      text:"More"
    }

]


function Sidebar() {
  const dispatch= useDispatch();

  return (
    <div className='w-{15%}'>
      <div className='p-3'>
       <button onClick={()=>dispatch(setOpen(true))} className='flex items-center gap-1 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
        <LuPencil size='24px'/>
        Compose
       </button>
      </div>
      <div className='text-gray-600'>
        {sidebarItems.map((items, index)=>{
            return(
                <div className='flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer'>
                    {items.icon}
                    <p>{items.text}</p>
                </div>
            )
          })
        }
      </div>
         
    </div>
  )
}

export default Sidebar
