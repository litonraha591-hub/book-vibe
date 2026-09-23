import { IBook } from '@/app/type/book.Type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IListedBookCardProps{
    book: IBook;
}

const ListedBooksCard = ({book}:IListedBookCardProps) => {
    return (
       <div
                   key={book.bookId}
                   className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-md p-5 border"
                 >
                   {/* Image */}
                   <div className="w-full md:w-56 h-auto flex-shrink-0">
                     <Image
                       src={book.image}
                       alt={`${book.bookName}`}
                       height={300}
                       width={400}
                       className="w-full h-full object-cover rounded-xl"
                     />
                   </div>
       
                   {/* Content */}
                   <div className="flex flex-col justify-center space-y-3">
                     <h3 className="text-2xl font-bold text-gray-800">
                       {book.bookName}
                     </h3>
       
                     <p className="text-gray-500">
                       By <span className="font-semibold">{book.author}</span>
                     </p>
       
                     <p className="text-gray-600 leading-7">
                       {book.review}
                     </p>
       
                    <Link href={`/books/${book.bookId}`}> <button className="bg-black text-white px-5 py-2 rounded-lg w-fit hover:bg-gray-800 transition">
                       Read More
                     </button></Link>
                   </div>
                 </div>
    );
};

export default ListedBooksCard;