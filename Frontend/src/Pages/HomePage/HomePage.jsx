import React from 'react'
import {  NavBar, ShowAllBooks } from '../../Componenets'

const HomePage = () => {
  return (
   <>
   <section className='min-h-screen w-full pt-6  bg-dark-browne'>
{/* navbar componenet  */}
<NavBar/>

<ShowAllBooks book={"All Books"}/>

   </section>
   </>
  )
}

export default HomePage
