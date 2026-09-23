"use client";
import BookCard from "@/components/shared/BookCard";
import { BooksContext } from "@/context/BooksContext";
import React, { useContext, useState } from "react";
import { IBook } from "../type/book.Type";
import Image from "next/image";
import ListedBooksCard from "@/components/shared/ListedBooksCard";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  const [sortBy, setSortBy] =useState<"rating"|"pages"|"year">("rating")
  console.log(readBooks);
  console.log(wishlist);
  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="my-7 bg-amber-100 rounded-3xl py-16 text-center">
        Listed Books
      </h2>
      <div className="text-center">

      <select value={sortBy} 
      onChange={(e)=> setSortBy(e.target.value as "rating"|"pages"|"year")} 
      defaultValue="Sort by"
      className="select select-accent">
  <option disabled={true}>Sort by</option>
  <option value={"rating"}>Rating</option>
  <option value={"pages"}>Number of Pages</option>
  <option value={"year"}>Published Year</option>
</select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
         {
           readBooks.length > 0? ( readBooks.map((book:IBook)=>{
                return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
            })
        ):(<h1>No read books found</h1>)
         }
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
         {
           wishlist.length > 0? ( wishlist.map((book:IBook)=>{
                return <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard> 
            })
        ):(<h1>No wishlist books found</h1>)
         }
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
