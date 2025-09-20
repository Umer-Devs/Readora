import React from 'react'

const AddBookPage = () => {
  return (
    <>
    <section className='bg-dark min-h-screen w-full flex flex-col items-center '>
     <h1 className='text-light font-bold  italic underline my-12'>Add Book</h1>
      
      <form className='flex flex-col'>
        <div>
          <div className='flex flex-col space-y-1'>
           <label htmlFor="" className='text-light'>Book Name</label>
           <input type="text" placeholder='Enter The Book Name' className='outline-none h-12 bg-white rounded-md min-w-lg px-4 ' />
          </div>
        </div>
      </form>
      

    </section>
    </>
  )
}

export default AddBookPage
