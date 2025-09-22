import React from 'react'
import { Book1 } from '../../assets'
import { Star } from "lucide-react"   // ⭐ icons (lucide-react se)

const dummyBooks = [
  {
    id: 1,
    bookName: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    ratings: 4.5,
    frontCover: Book1
  },
  {
    id: 2,
    bookName: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    ratings: 4.8,
    frontCover: Book1
  },
  {
    id: 3,
    bookName: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    ratings: 4.7,
    frontCover: Book1
  },
  {
    id: 4,
    bookName: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    ratings: 4.6,
    frontCover: Book1
  }
]

const Books = () => {
  return (
    <section className="bg-dark min-h-screen w-full px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <div className="mb-10 text-center">
        <h1 className="text-light font-bold underline italic text-3xl sm:text-4xl md:text-5xl tracking-wide">
          All Books
        </h1>
      </div>

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 custom-padding ">
        {dummyBooks.map(book => (
          <div 
            key={book.id} 
            className="bg-light  rounded-2xl shadow-md hover:shadow-xl p-5 flex flex-col items-center transition-all duration-300 hover:scale-105"
          >
            {/* Cover */}
            <div className="relative mb-4">
              <img 
                src={book.frontCover} 
                alt={book.bookName} 
                className=" h-100 w-full   rounded-lg border border-gray-300 shadow-sm"
              />
            </div>

            {/* Title */}
            <h2 className="text-dark font-bold text-lg sm:text-xl text-center line-clamp-2">
              {book.bookName}
            </h2>

            {/* Author */}
            <p className="text-gray-700 text-sm sm:text-base text-center italic mt-1">
              by {book.author}
            </p>

            {/* Genre */}
            <p className="text-gray-800 text-xs sm:text-sm text-center mt-2 px-3 py-1 bg-gray-200 rounded-full">
              {book.genre}
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-1 mt-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-dark text-sm">{book.ratings}/5</span>
            </div>

            {/* Button */}
            <button 
              className="mt-4 bg-dark text-white font-semibold py-2 px-5 rounded-lg hover:bg-dark/90 transition-colors duration-200"
              onClick={() => alert(`View details for ${book.bookName}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Books
