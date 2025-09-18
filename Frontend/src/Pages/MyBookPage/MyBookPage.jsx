import React from 'react'
import { NavBar, ShowAllBooks } from '../../Componenets'

const MyBookPage = () => {
  return (
     <section className='min-h-screen w-full pt-6  bg-dark-browne'>
{/* navbar componenet  */}
<NavBar/>

<ShowAllBooks book={"My Books"}/>

   </section>
  )
}

export default MyBookPage
