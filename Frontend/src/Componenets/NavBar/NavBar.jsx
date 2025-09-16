import React from 'react';
import { useState } from 'react';
import { FileHeart, Search, Menu, X, BookUser } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "MyBooks", link: "/my-book" },
    { name: "RentBook", link: "/rent-book" },
    { name: "AddBook", link: "/add-book" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="custom-padding py-4 bg-dark-browne flex justify-between items-center relative">
        {/* Logo */}
        <h2 className="text-2xl md:text-5xl font-bold text-primary-green">Readora</h2>
        
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 md:text-xl">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link to={navLink.link} className="text-white hover:text-primary-green">
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Search and Cart - Hidden on mobile */}
        <div className='hidden lg:flex items-center gap-6 text-white'>
          <form className='h-10 xl:w-70 rounded-md bg-white px-3 flex justify-between items-center'>
            <input type="text" className='outline-none text-black w-full h-full' placeholder='Search Books' />
            <Search className='cursor-pointer text-primary-brown' />
          </form>
          <div className='flex items-center gap-2'>
        <Link to={'/cart-book'}>
            <FileHeart className='cursor-pointer' size={30} />
          </Link>
          <Link to={'/login'}>
          <BookUser  className='cursor-pointer' size={30} />
          </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-dark-browne transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col items-start py-4 space-y-4 px-3">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link 
                to={navLink.link} 
                className="text-white hover:text-primary-green text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
          
          {/* Mobile Search and Cart */}
          <li className="w-full  mt-1">
            <form className='h-10 w-full rounded-md bg-white px-3 flex justify-between items-center'>
              <input type="text" className='outline-none text-black w-full h-full' placeholder='Search Books' />
              <Search className='cursor-pointer text-primary-brown' />
            </form>
          </li>
          <li className="mt-2">
            <div className='flex items-center gap-2 text-white'>
        <Link to={'/cart-book'}>
            <FileHeart className='cursor-pointer' size={30} />
          </Link>
          <Link to={'/login'}>
          <BookUser  className='cursor-pointer' size={30} />
          </Link>
          </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;