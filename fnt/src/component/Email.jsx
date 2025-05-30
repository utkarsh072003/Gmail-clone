import React, { useEffect } from 'react'
import El from './El'
import useGetAllEmails from '../hooks/useGetAllEmails'
import { useSelector } from 'react-redux';
import { useState } from 'react';


const Email = () => {
   
useGetAllEmails();

const {emails, searchText}=useSelector(store=>store.app)

const [filterEmail, setFilterEmail]= useState(emails)
  
useEffect(()=>{
 const filterEmail= emails.filter((email)=>{
   return email.subject.toLowerCase().includes(searchText.toLowerCase())||email.to.toLowerCase().includes(searchText.toLowerCase())|| email.message.toLowerCase().includes(searchText.toLowerCase())
 });
 setFilterEmail(filterEmail)

},[searchText, emails])

  return (
    <div>
    {
      filterEmail && filterEmail?.map((email)=><El key={email._id} email={email}/>)
    }

    
        
    </div>
  )
}

export default Email
