import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { AddBookPage,  Books, CartBook, HomePage, MyBookPage, RentBook, UpdateBookPage } from '../Pages'
import { LoginForm, SignupForm } from '../Forms'
import BookDetail from '../Pages/BookDetail/BookDetail'

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
    <Route path='/books' element={<Books/>}/>
    <Route path='/book-detail/:id' element={<BookDetail/>}/>
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
