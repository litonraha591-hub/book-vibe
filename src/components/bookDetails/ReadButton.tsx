
'use client'
import { IBook } from '@/app/type/book.Type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}:IBook) => {

    const {readBooks, setReadBooks} = useContext(BooksContext)

    const handleReadBook=()=>{
        console.log("Read Book triggered",book);
        setReadBooks([...readBooks, book]);
        toast.success(`your have read "${book.bookName}"`)
    }
    return (
       <button className="btn btn-primary" onClick={()=>handleReadBook()}>Read</button>


    );
};

export default ReadButton;