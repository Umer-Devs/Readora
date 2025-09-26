import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const myBookStore = createContext();

export const BookStore = ({children}) => {
  const [data, setData] = useState([]);

  const fetchBooksData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/book-data');
      setData(response.data);
      // console.log(response.data);
      
    } catch (error) {
      console.error('Failed to fetch book data:', error);
    }
  };

  useEffect(() => {
    fetchBooksData();
  }, []);

  return (
    <myBookStore.Provider value={{data}}>
      {children}
    </myBookStore.Provider>
  );
};
