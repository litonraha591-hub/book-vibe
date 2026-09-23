
'use client'
import React, { useState,createContext, ReactNode } from 'react';

 export const BooksContext = createContext({})

const BooksProvider = ({children}:{children:ReactNode }) => {
    const [readBooks, setReadBooks]= useState([])
    const [wishlist, setWishLists]= useState([])
    const sharedData ={
        readBooks,setReadBooks,wishlist, setWishLists
    }
    return (
        <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
    );
};

export default BooksProvider;