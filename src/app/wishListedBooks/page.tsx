
'use client'
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const WishListedPage = () => {

    const {wishlist} = useContext(BooksContext)
    return (
        <div>
           { wishlist.length}
        </div>
    );
};

export default WishListedPage;