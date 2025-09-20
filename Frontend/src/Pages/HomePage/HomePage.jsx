import React from 'react'
import { SideBar, UserCharts } from '../../Componenets'

const HomePage = () => {
  return (
<section className='min-h-screen w-full bg-dark flex '>
<SideBar/>
<section className="w-[87%] py-10 px-20 ">
<UserCharts/>
</section>
</section>
  )
}

export default HomePage
