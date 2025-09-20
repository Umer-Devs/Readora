import React from 'react'
import { navLinks } from '../../data'
import { Link } from 'react-router-dom'
import {CircleAlert, LogOut} from 'lucide-react'

const SideBar = () => {
  return (
 <>
 <section className=' min-h-screen flex flex-col items-center py-20  w-60 bg-light-blue'>


   <div className='my-[6%] flex flex-col items-center '>
    <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="" className='w-40 h-40 rounded-full mb-6 ' />
    <p className='text-center font-semibold'>UserName</p>
   </div>
      
      <ul className='my-12 flex flex-col items-start space-y-6 '>
        {navLinks.map((value,index)=>{
         return(
           <Link key={index} to={`${value.Link}`}>
          <li  className='md:text-lg cursor-pointer rounded-md '>{value.name}</li>
           </Link>

         )
        })}
      </ul>


      <div className='my-12 flex flex-col items-start space-y-6'>

        <Link to={'/notification'}><p className='flex items-center gap-2'> <CircleAlert />  Notifications</p></Link>
        <Link to={'/logout'}><p className='flex items-center gap-2'> <LogOut />  Logout</p></Link>

      </div>

 </section>
 </>
  )
}

export default SideBar
