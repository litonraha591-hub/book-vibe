import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/app/type/book.Type";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px]">
      <h1 className="text-3xl font-bold">Explore Popular books</h1>
      <div className="grid grid-cols-4 gap-4">
        {booksData.slice(0,4).map((book: IBook, ind: number) => (
          <BookCard book={book} key={ind}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default Books;
