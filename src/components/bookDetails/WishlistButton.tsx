
'use client'
import { IBook } from '@/app/type/book.Type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book}:{book:IBook}) => {

const {wishlist, setWishLists}=useContext(BooksContext)
    
    const handleWishList = ()=>{
        console.log('add to wishlist btn triggered')
        setWishLists([...wishlist, book]);
     toast.success(`you have added "${book.bookName}" to your wishlists`)

    }
    return (
      <button className="btn btn-primary" onClick={()=> handleWishList()}>Wishlist</button>
    );
};

export default WishlistButton;