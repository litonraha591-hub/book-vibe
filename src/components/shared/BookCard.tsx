import { IBook } from '@/app/type/book.Type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface IBookCardProps{
    book:IBook
}
const BookCard = ({book}:IBookCardProps) => {
    return (
        <div>
               <div
       
            className="w-full relative overflow-hidden max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Top Gray Container for Book Cover Image */}
            <div className="flex  items-center justify-center rounded-xl bg-gray-100 p-4">
              <Image
                src={book.image}
                alt={book.bookName}
                width={8000}
                height={1000}
                className=" w-full object-contain shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Tags Section */}
            <div className="mt-6 flex flex-wrap gap-3">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Book Title & Author */}
            <div className="mt-4">
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                {book.bookName}
              </h2>
              <p className="mt-2 text-sm font-medium text-gray-600">
                By : {book.author}
              </p>
            </div>

            {/* Dashed Separator Line */}
            <div className="my-5 border-t-2 border-dashed border-gray-200" />

            {/* Footer Category & Rating */}
            <div className="flex items-center justify-between text-sm font-medium text-gray-700">
              <span>{book.category}</span>

              <div className="flex items-center gap-1.5">
                <span>{book.rating.toFixed(2)}</span>
                {/* Star Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
            </div>
                 <Link href={`/books/${book.bookId}`}>
                 <button className="btn btn-success container mx-auto mt-4">Show Details</button>
                 </Link>
          </div>
        </div>
    );
};

export default BookCard;