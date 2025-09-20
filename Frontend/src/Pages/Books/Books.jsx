import React from 'react'
import { Book1 } from '../../assets'

const Books = () => {
  return (
  <section className='bg-dark min-h-screen w-full'>
    <div className='py-20 '>
      <h1 className='text-light font-bold text-center underline italic   '>All Books </h1>
    </div>
      
      <section className='grid grid-cols-4'>
     <div className='p-2 rounded-md bg-light'>
 <img src={Book1} className='max-h-70 bg-' alt="" />
     </div>
      </section>
  </section>
  )
}

export default Books
