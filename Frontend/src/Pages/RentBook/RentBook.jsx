import React from 'react'
import { NavBar, ShowAllBooks } from '../../Componenets'

const RentBook = () => {
  return (
     <section className='min-h-screen w-full pt-6  bg-dark-browne'>
{/* navbar componenet  */}
<NavBar/>

<ShowAllBooks book={"Rents Books"}/>
<ShowAllBooks book={"Buy Books"}/>

   </section>
  )
}

export default RentBook
