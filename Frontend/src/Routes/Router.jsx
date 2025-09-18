import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { AddBookPage, BookDetailPage, CartBook, HomePage, MyBookPage, RentBook, UpdateBookPage } from '../Pages'
import { LoginForm, SignupForm } from '../Forms'

const Router = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    {/* pages  */}
    <Route path='/' element={<HomePage/>}/>
    <Route path='/my-book' element={<MyBookPage/>}/>
    <Route path='/edit-book' element={<UpdateBookPage/>}/>
    <Route path='/rent-book' element={<RentBook/>}/>
    <Route path='/cart-book' element={<CartBook/>}/>
    <Route path='/add-book' element={<AddBookPage/>}/>
    <Route path='/book-detail' element={<BookDetailPage/>}/>
    {/* pages  */}
    {/* forms  */}
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/signin' element={<SignupForm/>}/>
    {/* forms  */}
  </Routes>

  </BrowserRouter>
  </>
  )
}

export default Router
