import React from 'react'
import { Book, User, Calendar, Hash, DollarSign, Star, FileText, Building, MapPin, Package, Bookmark, Clock, Users, Award, Globe, BookOpen, Tag, Home, Upload, BookOpenText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AddBookComponent = () => {
    const [form, setForm] = useState({
        bookname: "",
        authorname: "",
        isbnnumber: "",
        publicationyear: "",
        publisher: "",
        genre: "",
        noofpages: "",
        price: "",
        ratings: "",
        language: "",
        frontcover: null,
        backcover: null,
        edition: "",
        stockquantity: "",
        bookcondition: "",
        location: "",
        purchasedate: "",
        bookformat: "",
        age: "",
        bookseries: "",
        volumebooknumber: "",
        readingtime: "",
        country: "",
        tags: "",
        available: "",
        rent: "",
        description: ""
    });
    const [frontPreview, setFrontPreview] = useState(null);
    const [backPreview, setBackPreview] = useState(null);

    const handlerChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'frontcover' || name === 'backcover') {
            const file = files[0];
            if (file && file.size > 10 * 1024 * 1024) {
                alert("File size should be less than 10MB!");
                return;
            }
            if (file && !['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
                alert("Only PNG, JPG, or JPEG files are allowed!");
                return;
            }
            setForm((prev) => ({ ...prev, [name]: file }));
            if (name === 'frontcover') {
                setFrontPreview(file ? URL.createObjectURL(file) : null);
            } else {
                setBackPreview(file ? URL.createObjectURL(file) : null);
            }
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in form) {
            if (form[key]) {
                formData.append(key, form[key]);
            }
        }
        console.log(Object.fromEntries(formData));
        // Example API call: await fetch('/api/upload', { method: 'POST', body: formData });
    };

    return (
        <section className='w-full min-h-screen'>
            <div className='px-4 md:px-8 lg:px-12 xl:px-20'>
                <div className='rounded-lg shadow-lg p-8'>
                    <div className=''>
                        <Link to={'/'} className='flex items-center gap-3 mb-8'>
                            <Book className='w-8 h-8 text-light-green' />
                            <h1 className='text-3xl font-bold text-white'>Add New Book</h1>
                        </Link>
                    </div>
                    
                    <div className='space-y-6'>
                        <div className='grid md:grid-cols-2 gap-6'>
                            {/* Book Title */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Book className='w-6 h-6' />
                                    Book Title
                                </label>
                                <input 
                                    type="text"
                                    name='bookname'
                                    value={form.bookname}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Book Title'
                                />
                            </div>

                            {/* Author */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <User className='w-6 h-6' />
                                    Author
                                </label>
                                <input 
                                    type="text"
                                    name='authorname'
                                    value={form.authorname}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Author Name'
                                />
                            </div>

                            {/* ISBN */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Hash className='w-6 h-6' />
                                    ISBN
                                </label>
                                <input 
                                    type="text"
                                    name='isbnnumber'
                                    value={form.isbnnumber}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter ISBN Number'
                                />
                            </div>

                            {/* Publication Year */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Calendar className='w-6 h-6' />
                                    Publication Year
                                </label>
                                <input 
                                    type="number"
                                    name='publicationyear'
                                    value={form.publicationyear}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Publication Year'
                                />
                            </div>

                            {/* Publisher */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Building className='w-6 h-6' />
                                    Publisher
                                </label>
                                <input 
                                    type="text"
                                    name='publisher'
                                    value={form.publisher}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Publisher Name'
                                />
                            </div>

                            {/* Genre */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <FileText className='w-6 h-6' />
                                    Genre
                                </label>
                                <select 
                                    name='genre'
                                    value={form.genre}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value="">Select Genre</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="non-fiction">Non-Fiction</option>
                                    <option value="mystery">Mystery</option>
                                    <option value="romance">Romance</option>
                                    <option value="sci-fi">Science Fiction</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="biography">Biography</option>
                                    <option value="history">History</option>
                                    <option value="self-help">Self Help</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Pages */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <FileText className='w-6 h-6' />
                                    Number of Pages
                                </label>
                                <input 
                                    type="number"
                                    name='noofpages'
                                    value={form.noofpages}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Number of Pages'
                                />
                            </div>

                            {/* Price */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <DollarSign className='w-6 h-6' />
                                    Price
                                </label>
                                <input 
                                    type="number"
                                    step="0.01"
                                    name='price'
                                    value={form.price}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Price'
                                />
                            </div>

                            {/* Rating */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Star className='w-6 h-6' />
                                    Rating
                                </label>
                                <select 
                                    name='ratings'
                                    value={form.ratings}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value="">Select Rating</option>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                            </div>

                            {/* Language */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <MapPin className='w-6 h-6' />
                                    Language
                                </label>
                                <select 
                                    name='language'
                                    value={form.language}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value="">Select Language</option>
                                    <option value="english">English</option>
                                    <option value="urdu">Urdu</option>
                                    <option value="arabic">Arabic</option>
                                    <option value="french">French</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Front Cover Upload */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Upload className='w-6 h-6' />
                                    Front Cover Image
                                </label>
                                <div className='relative'>
                                    <input 
                                        type="file"
                                        name='frontcover'
                                        accept="image/*"
                                        onChange={handlerChange}
                                        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                                        id="front-cover"
                                    />
                                    <label 
                                        htmlFor="front-cover"
                                        className='w-full bg-gray-300 border-2 border-dashed border-gray-300 rounded-lg outline-none h-32 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors'
                                    >
                                        <Upload className='w-8 h-8 text-gray-400 mb-2' />
                                        <span className='text-sm md:text-md text-gray-600 text-center'>
                                            Click to upload front cover image
                                        </span>
                                        <span className='text-xs text-gray-400 text-center mt-1'>
                                            PNG, JPG, JPEG up to 10MB
                                        </span>
                                    </label>
                                </div>
                                {frontPreview && (
                                    <div className="mt-2">
                                        <img src={frontPreview} alt="Front cover preview" className="h-32 w-auto object-cover rounded-lg" />
                                    </div>
                                )}
                            </div>

                            {/* Back Cover Upload */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Upload className='w-6 h-6' />
                                    Back Cover Image
                                </label>
                                <div className='relative'>
                                    <input 
                                        type="file"
                                        name='backcover'
                                        accept="image/*"
                                        onChange={handlerChange}
                                        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                                        id="back-cover"
                                    />
                                    <label 
                                        htmlFor="back-cover"
                                        className='w-full bg-gray-300 border-2 border-dashed border-gray-300 rounded-lg outline-none h-32 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors'
                                    >
                                        <Upload className='w-8 h-8 text-gray-400 mb-2' />
                                        <span className='text-sm md:text-md text-gray-600 text-center'>
                                            Click to upload back cover image
                                        </span>
                                        <span className='text-xs text-gray-400 text-center mt-1'>
                                            PNG, JPG, JPEG up to 10MB
                                        </span>
                                    </label>
                                </div>
                                {backPreview && (
                                    <div className="mt-2">
                                        <img src={backPreview} alt="Back cover preview" className="h-32 w-auto object-cover rounded-lg" />
                                    </div>
                                )}
                            </div>

                            {/* Edition */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <BookOpen className='w-6 h-6' />
                                    Edition
                                </label>
                                <input 
                                    type="text"
                                    name='edition'
                                    value={form.edition}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='e.g., 1st Edition, 2nd Edition'
                                />
                            </div>

                            {/* Stock Quantity */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Package className='w-6 h-6' />
                                    Stock Quantity
                                </label>
                                <input 
                                    type="number"
                                    name='stockquantity'
                                    value={form.stockquantity}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Available Quantity'
                                />
                            </div>

                            {/* Book Condition */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Award className='w-6 h-6' />
                                    Book Condition
                                </label>
                                <select 
                                    name='bookcondition'
                                    value={form.bookcondition}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value="">Select Condition</option>
                                    <option value="new">New</option>
                                    <option value="like-new">Like New</option>
                                    <option value="very-good">Very Good</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                    <option value="poor">Poor</option>
                                </select>
                            </div>

                            {/* Location/Shelf */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Home className='w-6 h-6' />
                                    Location/Shelf
                                </label>
                                <input 
                                    type="text"
                                    name='location'
                                    value={form.location}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='e.g., A1, Fiction-B2, Shelf 15'
                                />
                            </div>

                            {/* Purchase Date */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Calendar className='w-6 h-6' />
                                    Purchase Date
                                </label>
                                <input 
                                    type="date"
                                    name='purchasedate'
                                    value={form.purchasedate}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                />
                            </div>

                            {/* Book Format */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <BookOpen className='w-6 h-6' />
                                    Book Format
                                </label>
                                <select 
                                    name='bookformat'
                                    value={form.bookformat}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value="">Select Format</option>
                                    <option value="hardcover">Hardcover</option>
                                    <option value="paperback">Paperback</option>
                                    <option value="ebook">E-book</option>
                                    <option value="audiobook">Audiobook</option>
                                    <option value="magazine">Magazine</option>
                                    <option value="journal">Journal</option>
                                </select>
                            </div>

                            {/* Target Age Group */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Users className='w-6 h-6' />
                                    Target Age Group
                                </label>
                                <select 
                                    name='age'
                                    value={form.age}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value="">Select Age Group</option>
                                    <option value="children">Children (0-12)</option>
                                    <option value="teen">Teen (13-17)</option>
                                    <option value="young-adult">Young Adult (18-25)</option>
                                    <option value="adult">Adult (26-64)</option>
                                    <option value="senior">Senior (65+)</option>
                                    <option value="all-ages">All Ages</option>
                                </select>
                            </div>

                            {/* Book Series */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Bookmark className='w-6 h-6' />
                                    Book Series
                                </label>
                                <input 
                                    type="text"
                                    name='bookseries'
                                    value={form.bookseries}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Series Name (if applicable)'
                                />
                            </div>

                            {/* Volume Number */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Hash className='w-6 h-6' />
                                    Volume/Book Number
                                </label>
                                <input 
                                    type="number"
                                    name='volumebooknumber'
                                    value={form.volumebooknumber}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='e.g., 1, 2, 3'
                                />
                            </div>

                            {/* Reading Duration */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Clock className='w-6 h-6' />
                                    Estimated Reading Time (Hours)
                                </label>
                                <input 
                                    type="number"
                                    name='readingtime'
                                    value={form.readingtime}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Reading Time in Hours'
                                />
                            </div>

                            {/* Book Weight */}
                            

                            {/* Country of Origin */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Globe className='w-6 h-6' />
                                    Country of Origin
                                </label>
                                <input 
                                    type="text"
                                    name='country'
                                    value={form.country}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter Country of Origin'
                                />
                            </div>

                            {/* Tags/Keywords */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Tag className='w-6 h-6' />
                                    Tags/Keywords
                                </label>
                                <input 
                                    type="text"
                                    name='tags'
                                    value={form.tags}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Enter tags separated by commas'
                                />
                            </div>

                            {/* Availability Status */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <Package className='w-6 h-6' />
                                    Availability Status
                                </label>
                                <select 
                                    name='available'
                                    value={form.available}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value="">Select Status</option>
                                    <option value="available">Available</option>
                                    <option value="checked-out">Checked Out</option>
                                    <option value="reserved">Reserved</option>
                                    <option value="lost">Lost</option>
                                    <option value="damaged">Damaged</option>
                                    <option value="repair">Under Repair</option>
                                </select>
                            </div>

                            {/* Rent Option */}
                            <div className='space-y-2'>
                                <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                    <BookOpenText className='w-6 h-6' />
                                    Can You Give This Book In Rent
                                </label>
                                <select 
                                    name='rent'
                                    value={form.rent}
                                    onChange={handlerChange}
                                    className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none h-12 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value="">Select Status</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>

                        {/* Summary/Synopsis */}
                        <div className='space-y-2'>
                            <label className='flex items-center gap-2 text-sm md:text-md font-medium text-primary-green'>
                                <FileText className='w-6 h-6' />
                                Book Summary/Description
                            </label>
                            <textarea 
                                rows={4}
                                name='description'
                                value={form.description}
                                onChange={handlerChange}
                                className='w-full bg-gray-300 border border-gray-300 rounded-lg outline-none p-4 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none'
                                placeholder='Enter Book Summary or Synopsis'
                            />
                        </div>

                        {/* Buttons */}
                        <div className='flex gap-4 pt-6'>
                            <button 
                                onClick={handlerClick}
                                type="submit"
                                className='bg-primary-green text-black cursor-pointer font-medium px-8 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2'
                            >
                                <Book className='w-6 h-6' />
                                Add Book
                            </button>
                            <button 
                                type="button"
                                className='bg-gray-300 hover:bg-gray-300 text-black cursor-pointer font-medium px-8 py-3 rounded-lg transition-colors duration-200'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddBookComponent;