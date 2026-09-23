import { IBook } from "@/app/type/book.Type";
import BookCard from "@/components/shared/BookCard";


const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
const booksData = await getBooks();
console.log(booksData,"from books")

  return (
    <section className="container mx-auto my-[70px]">
        <h1 className="text-4xl font-bold align-items-center">All Books</h1>
      <div className="grid grid-cols-4 gap-4">
        {booksData.map((book: IBook, ind: number) => (
          <BookCard book={book} key={ind}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default Books;
