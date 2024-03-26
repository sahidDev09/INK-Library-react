import { useLoaderData } from "react-router-dom";
import SingleBook from "./SingleBook";

const BooksContainer = () => {
  const books = useLoaderData();

  return (
    <div>
      <h1 className=" text-4xl text-center my-10">Books</h1>

      <div className=" grid md:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <SingleBook key={index} books={book}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default BooksContainer;
