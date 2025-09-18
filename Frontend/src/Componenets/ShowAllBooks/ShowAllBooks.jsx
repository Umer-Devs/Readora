import React from "react";
import {
  Book,
  Star,
  DollarSign,
  Calendar,
  FileText,
  Globe,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const ShowAllBooks = ({book}) => {
  const books = [
    {
      bookname: "The Great Gatsby",
      authorname: "F. Scott Fitzgerald",
      price: "9.99",
      ratings: 4,
      genre: "Fiction",
      publicationyear: "1925",
      language: "English",
      pages: 180,
      frontcover:
        "https://cdn.pixabay.com/photo/2018/10/26/02/19/book-3773783_1280.jpg",
      description:
        "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    },
    {
      bookname: "Dune",
      authorname: "Frank Herbert",
      price: "14.99",
      ratings: 5,
      genre: "Sci-Fi",
      publicationyear: "1965",
      language: "English",
      pages: 412,
      frontcover:
        "https://cdn.pixabay.com/photo/2019/12/18/13/56/glasses-4704055_640.jpg",
      description:
        "An epic science fiction tale about Paul Atreides on the desert planet Arrakis.",
    },
    {
      bookname: "To Kill a Mockingbird",
      authorname: "Harper Lee",
      price: "11.99",
      ratings: 5,
      genre: "Classic",
      publicationyear: "1960",
      language: "English",
      pages: 281,
      frontcover:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      description:
        "A timeless novel that explores themes of justice, morality, and compassion in the Deep South.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-dark-browne py-10">
      <div className="px-6 lg:px-16  ">
        {/* Heading */}
        <h1 className=" font-bold   italic underline  text-white   mb-12   text-center gap-2">
          
          {book}
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-5 flex flex-col"
            >
              {/* Cover */}
              <img
                src={book.frontcover}
                alt={book.bookname}
                className="w-full h-56 object-cover rounded-xl"
              />

              {/* Info */}
              <div className="mt-4 flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-gray-800">
                  {book.bookname}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  by {book.authorname}
                </p>

                {/* Genre, Year, Language, Pages */}
                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4 text-primary-blue" />
                    <span>{book.genre}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-primary-blue" />
                    <span>{book.publicationyear}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4 text-primary-blue" />
                    <span>{book.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-primary-blue" />
                    <span>{book.pages} pages</span>
                  </div>
                </div>

                {/* Price & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-primary-blue font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>{book.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <span>{book.ratings}</span>
                  </div>
                </div>

                {/* Short Desc */}
                <p className="text-sm text-gray-600 flex-1">
                  {book.description.length > 70
                    ? book.description.slice(0, 70) + "..."
                    : book.description}
                </p>
              </div>

              {/* Button */}
              <Link
                to="#"
                className="mt-4 block text-center bg-primary-blue text-white py-2 rounded-xl hover:bg-primary-blue/90 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowAllBooks;
