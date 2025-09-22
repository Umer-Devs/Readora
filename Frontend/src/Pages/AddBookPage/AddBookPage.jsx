import React, { useState } from 'react'

const AddBookPage = () => {
  const [formData, setFormData] = useState({
  bookName: '',
  author: '',
  isbn: '',
  publicationYear: '',
  genre: '',
  description: '',
  publisher: '',
  ratings: '',
  frontCover: null,
  backCover: null,
  available: ''   
})


  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()

    
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key])
    })
    // console.log('Form submitted:', Object.fromEntries(data))
  }

  return (
    <>
      <section className='bg-dark min-h-screen w-full flex flex-col items-center px-4 py-8'>
        <h1 className='text-light font-bold italic underline my-8  '>Add Book</h1>
        
        <form 
          onSubmit={handleSubmit} 
          className='bg-light-blue flex flex-col w-full max-w-5xl p-4 sm:p-6 md:p-8 rounded-lg' 
          encType="multipart/form-data"
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="bookName" className='text-light text-sm sm:text-base'>Book Name</label>
              <input 
                type="text" 
                id="bookName"
                name="bookName"
                value={formData.bookName}
                onChange={handleChange}
                placeholder='Enter The Book Name' 
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 text-sm sm:text-base'
                required 
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="author" className='text-light text-sm sm:text-base'>Author</label>
              <input 
                type="text" 
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder='Enter The Author Name' 
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 text-sm sm:text-base'
                required 
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="isbn" className='text-light text-sm sm:text-base'>ISBN</label>
              <input 
                type="text" 
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder='Enter ISBN (e.g., 978-3-16-148410-0)' 
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 text-sm sm:text-base'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="publicationYear" className='text-light text-sm sm:text-base'>Publication Year</label>
              <input 
                type="number" 
                id="publicationYear"
                name="publicationYear"
                value={formData.publicationYear}
                onChange={handleChange}
                placeholder='Enter Publication Year' 
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 text-sm sm:text-base'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="genre" className='text-light text-sm sm:text-base'>Genre</label>
              <input 
                type="text" 
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder='Enter Genre (e.g., Fiction, Non-Fiction)' 
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 text-sm sm:text-base'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="publisher" className='text-light text-sm sm:text-base'>Publisher</label>
              <input 
                type="text" 
                id="publisher"
                name="publisher"
                value={formData.publisher}
                onChange={handleChange}
                placeholder='Enter Publisher Name' 
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 text-sm sm:text-base'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="frontCover" className='text-light text-sm sm:text-base'>Front Cover Image</label>
              <input 
                type="file" 
                id="frontCover"
                name="frontCover"
                accept="image/*"
                onChange={handleChange}
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="backCover" className='text-light text-sm sm:text-base'>Back Cover Image</label>
              <input 
                type="file" 
                id="backCover"
                name="backCover"
                accept="image/*"
                onChange={handleChange}
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base'
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="ratings" className='text-light text-sm sm:text-base'>Ratings (1-5)</label>
              <input 
                type="number" 
                id="ratings"
                name="ratings"
                value={formData.ratings}
                onChange={handleChange}
                placeholder='Enter Rating (1-5)' 
                className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 text-sm sm:text-base'
                min="1"
                max="5"
              />
            </div>
            <div className='flex flex-col space-y-1'>
              <label htmlFor="available" className='text-light text-sm sm:text-base'>Available</label>
              <select 
  id="available"
  name="available"
  value={formData.available || ""}
  onChange={handleChange}
  className='outline-none h-10 sm:h-12 bg-white rounded-md w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base'
>
  <option value="" disabled>Select Availability</option>
  <option value="yes">Yes</option>
  <option value="no">No</option>
</select>

            </div>
          </div>
          <div className='flex flex-col space-y-1 mt-6 sm:mt-8'>
            <label htmlFor="description" className='text-light text-sm sm:text-base'>Description</label>
            <textarea 
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder='Enter Book Description' 
              className='outline-none h-24 sm:h-32 bg-white rounded-md w-full px-3 sm:px-4 py-2 text-sm sm:text-base'
            />
          </div>
          <button 
            type="submit"
            className='mt-6 sm:mt-8 bg-dark text-white font-bold py-2 sm:py-3 px-4 rounded-md hover:bg-dark/90 w-full sm:w-auto sm:min-w-[120px]'
          >
            Add Book
          </button>
        </form>
      </section>
    </>
  )
}

export default AddBookPage