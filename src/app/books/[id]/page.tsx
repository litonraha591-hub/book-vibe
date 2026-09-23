import { IBook } from "@/app/type/book.Type";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import Image from "next/image";
import React from "react";
interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => book.bookId === Number(id),
  ) as IBook;
  console.log(book, "from bookid");
  return (
    <div className=" container mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <Image
            src={book.image}
            alt={`${book.bookName}`}
            height={500}
            width={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>{book.author}</p>
          <div className="card-actions justify-end">
           <ReadButton book={book}></ReadButton>
            <WishlistButton book={book}></WishlistButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
