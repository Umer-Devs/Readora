import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { myBookStore } from "../../Context/ContextApi";

const BookDetail = () => {
  const { id } = useParams(); // id from route
  const {data} = useContext(myBookStore); // get books array from context

  const book = data?.find((b) => String(b._id) === id); // find matching book

  if (!book) {
    return (
      <div className="text-light text-center py-20">
        <h2>Book not found.</h2>
      </div>
    );
  }

  return (
    <section className="bg-dark min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
      {/* Heading */}
      <div className="py-8 sm:py-12">
        <h1 className="text-light font-bold text-center underline italic text-2xl sm:text-3xl md:text-4xl">
          {book.bookName}
        </h1>
      </div>

      {/* Book Card */}
      <div className="bg-light rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-4xl w-full">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Images Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            {/* Front Cover */}
            <div className="flex flex-col items-center">
              <img
                src={`http://localhost:3000/${book.frontCover}`}
                alt={`${book.bookName} front cover`}
                className="h-48 sm:h-56 lg:h-64 w-36 sm:w-40 lg:w-48 object-cover rounded-md border border-gray-200 shadow-sm"
              />
              <p className="text-dark text-sm sm:text-base mt-2">Front Cover</p>
            </div>

            {/* Back Cover */}
            <div className="flex flex-col items-center">
              <img
                src={`http://localhost:3000/${book.backCover}`}
                alt={`${book.bookName} back cover`}
                className="h-48 sm:h-56 lg:h-64 w-36 sm:w-40 lg:w-48 object-cover rounded-md border border-gray-200 shadow-sm"
              />
              <p className="text-dark text-sm sm:text-base mt-2">Back Cover</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-4 sm:gap-5 flex-1">
            <div>
              <h2 className="text-dark font-bold text-lg sm:text-xl">Details</h2>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Author:</span> {book.author}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Genre:</span> {book.genre}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Publisher:</span> {book.publisher}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Publication Year:</span> {book.publicationYear}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">ISBN:</span> {book.isbn}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Rating:</span> {book.ratings}/5
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Availability:</span>
                <span
                  className={`ml-2 inline-block px-2 py-1 rounded-full text-xs sm:text-sm ${
                    book.available === "yes"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {book.available === "yes" ? "Available" : "Not Available"}
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-dark font-bold text-lg sm:text-xl">Description</h2>
              <p className="text-dark text-sm sm:text-base leading-relaxed">
                {book.description}
              </p>
            </div>

            <button
              className="mt-4 bg-dark text-light font-semibold py-2 px-4 rounded-md hover:bg-dark/90 transition-colors duration-200 w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              Back to Books
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
