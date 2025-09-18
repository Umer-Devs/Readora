import React from 'react';
import { Book, User, Calendar, DollarSign, Star, MapPin, Building, FileText, Package, Award, Home, BookOpen, Users, Bookmark, Hash, Clock, Globe, Tag, BookOpenText } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample book data (in a real app, this would come from props or an API)
const book = {
  bookname: 'The Great Gatsby',
  authorname: 'F. Scott Fitzgerald',
  isbnnumber: '9780743273565',
  publicationyear: '1925',
  publisher: 'Scribner',
  genre: 'fiction',
  noofpages: '180',
  price: '9.99',
  ratings: '4',
  language: 'english',
  frontcover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4ebf0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
  backcover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4ebf0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', // Placeholder for back cover
  edition: '1st Edition',
  stockquantity: '10',
  bookcondition: 'new',
  location: 'A1',
  purchasedate: '2025-01-15',
  bookformat: 'paperback',
  age: 'adult',
  bookseries: '',
  volumebooknumber: '',
  readingtime: '6',
  country: 'USA',
  tags: 'classic, romance, tragedy',
  available: 'available',
  rent: 'yes',
  description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the Jazz Age on Long Island.'
};

const BookDetailPage = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 py-8">
      <div className="px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Book className="w-8 h-8 text-primary-green" />
            <h1 className="text-3xl font-bold text-gray-800">{book.bookname || 'Untitled'}</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Images and Main Details */}
            <div className="space-y-6">
              {/* Cover Images */}
              <div className="flex flex-col sm:flex-row gap-4">
                {book.frontcover && (
                  <div className="flex-1">
                    <img
                      src={book.frontcover}
                      alt={`${book.bookname} front cover`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600 text-center mt-2">Front Cover</p>
                  </div>
                )}
                {book.backcover && (
                  <div className="flex-1">
                    <img
                      src={book.backcover}
                      alt={`${book.bookname} back cover`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600 text-center mt-2">Back Cover</p>
                  </div>
                )}
              </div>

              {/* Main Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-6 h-6 text-primary-green" />
                  <span className="font-medium">Author:</span> {book.authorname || 'Unknown Author'}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Hash className="w-6 h-6 text-primary-green" />
                  <span className="font-medium">ISBN:</span> {book.isbnnumber || 'N/A'}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="w-6 h-6 text-primary-green" />
                  <span className="font-medium">Publisher:</span> {book.publisher || 'Unknown Publisher'}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-6 h-6 text-primary-green" />
                  <span className="font-medium">Publication Year:</span> {book.publicationyear || 'N/A'}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-6 h-6 text-primary-green" />
                  <span className="font-medium">Price:</span> ${book.price || '0.00'}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-6 h-6 text-primary-green" />
                  <span className="font-medium">Rating:</span> {book.ratings ? `${book.ratings} Stars` : 'No Rating'}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-6 h-6 text-primary-green" />
                  <span className="font-medium">Language:</span> {book.language || 'Unknown Language'}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FileText className="w-6 h-6 text-primary-green" />
                  <span className="font-medium">Genre:</span> {book.genre || 'Unknown Genre'}
                </div>
              </div>
            </div>

            {/* Right Column: Additional Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Edition:</span> {book.edition || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FileText className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Pages:</span> {book.noofpages || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Package className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Stock Quantity:</span> {book.stockquantity || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Condition:</span> {book.bookcondition || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Home className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Location/Shelf:</span> {book.location || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Purchase Date:</span> {book.purchasedate || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Format:</span> {book.bookformat || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Target Age Group:</span> {book.age || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Bookmark className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Series:</span> {book.bookseries || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Hash className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Volume Number:</span> {book.volumebooknumber || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Reading Time:</span> {book.readingtime ? `${book.readingtime} Hours` : 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Country of Origin:</span> {book.country || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Tag className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Tags:</span> {book.tags || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Package className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Availability:</span> {book.available || 'N/A'}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpenText className="w-6 h-6 text-primary-green" />
                <span className="font-medium">Available for Rent:</span> {book.rent || 'N/A'}
              </div>
            </div>
          </div>

          {/* Description/Summary */}
          <div className="mt-8">
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <FileText className="w-6 h-6 text-primary-green" />
              <span className="font-medium text-lg">Book Summary/Description</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{book.description || 'No description available.'}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Link
              to="/"
              className="bg-primary-green text-black font-medium px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
            >
              <Book className="w-6 h-6" />
              Back to Books
            </Link>
            {book.rent === 'yes' && (
              <button
                className="bg-primary-blue text-white font-medium px-6 py-3 rounded-lg   transition-colors duration-200 flex items-center gap-2"
              >
                <BookOpenText className="w-6 h-6" />
                Rent Book
              </button>
            )}
            {book.available === 'available' && (
              <button
                className="bg-green-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
              >
                <Book className="w-6 h-6" />
                Buy Book
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailPage;