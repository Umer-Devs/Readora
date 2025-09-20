import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [form, setForm] = useState({
   
    email: "",
    password: "",
  
  })

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section className='min-h-screen bg-dark w-full flex justify-center items-center p-4'>
      <form
        onSubmit={handlerSubmit}
        className='w-full md:max-w-xl p-4 sm:p-8 bg-dark-blue flex flex-col justify-center rounded-md items-center space-y-6'
      >
        <h1 className='uppercase italic text-white font-bold underline tracking-wider '>Login</h1>

        
        <input
          type="email"
          onChange={handlerChange}
          name='email'
          placeholder='Enter Your Email'
          className='outline-none bg-white h-12 w-full rounded-md px-2'
        />
        <input
          type="password"
          onChange={handlerChange}
          name='password'
          placeholder='Enter Your password'
          className='outline-none bg-white h-12 w-full rounded-md px-2'
        />

        
         <Link to={'/signin'}><p className='text-light-blue'>You have already an account <span className='text-light underline  '>Sign in</span></p></Link>

        <button
          type='submit'
          className='w-full rounded-md h-12 bg-dark text-white'
        >
          Login
        </button>
      </form>
    </section>
  )
}

export default LoginForm
