import React from "react";
import { Book1 } from "../../assets";

const dummyBook = {
  id: 1,
  bookName: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "978-0743273565",
  publicationYear: 1925,
  genre: "Fiction",
  description:
    "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
  publisher: "Scribner",
  ratings: 4.5,
  frontCover: Book1,
  backCover: Book1,
  available: "yes",
};

const BookDetail = () => {
  return (
    <section className="bg-dark min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
      {/* Heading */}
      <div className="py-8 sm:py-12">
        <h1 className="text-light font-bold text-center underline italic text-2xl sm:text-3xl md:text-4xl">
          {dummyBook.bookName}
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
                src={dummyBook.frontCover}
                alt={`${dummyBook.bookName} front cover`}
                className="h-48 sm:h-56 lg:h-64 w-36 sm:w-40 lg:w-48 object-cover rounded-md border border-gray-200 shadow-sm"
              />
              <p className="text-dark text-sm sm:text-base mt-2">Front Cover</p>
            </div>

            {/* Back Cover */}
            <div className="flex flex-col items-center">
              <img
                src={dummyBook.backCover}
                alt={`${dummyBook.bookName} back cover`}
                className="h-48 sm:h-56 lg:h-64 w-36 sm:w-40 lg:w-48 object-cover rounded-md border border-gray-200 shadow-sm"
              />
              <p className="text-dark text-sm sm:text-base mt-2">Back Cover</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-4 sm:gap-5 flex-1">
            
            {/* Book Info */}
            <div>
              <h2 className="text-dark font-bold text-lg sm:text-xl">Details</h2>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Author:</span> {dummyBook.author}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Genre:</span> {dummyBook.genre}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Publisher:</span> {dummyBook.publisher}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Publication Year:</span> {dummyBook.publicationYear}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">ISBN:</span> {dummyBook.isbn}
              </p>
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Rating:</span> {dummyBook.ratings}/5
              </p>

              {/* Availability */}
              <p className="text-dark text-sm sm:text-base">
                <span className="font-semibold">Availability:</span>
                <span
                  className={`ml-2 inline-block px-2 py-1 rounded-full text-xs sm:text-sm ${
                    dummyBook.available === "yes"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {dummyBook.available === "yes" ? "Available" : "Not Available"}
                </span>
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-dark font-bold text-lg sm:text-xl">Description</h2>
              <p className="text-dark text-sm sm:text-base leading-relaxed">
                {dummyBook.description}
              </p>
            </div>

            {/* Back Button */}
            <button
              className="mt-4 bg-dark text-light font-semibold py-2 px-4 rounded-md hover:bg-dark/90 transition-colors duration-200 w-full sm:w-auto"
              onClick={() => alert("Returning to Books page")}
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
