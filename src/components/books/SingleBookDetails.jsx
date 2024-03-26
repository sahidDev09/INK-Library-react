import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  saveBookforRead,
  saveBookforWishlist,
} from "../../utility/LocalStorage";

const SingleBookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);
  console.log(id, book);

  const handleRead = () => {
    saveBookforRead(id);
    toast.success("Successfully added to read");
  };

  const handleWishlist = () => {
    saveBookforWishlist(id);
    toast.success("Successfully added on wishlist");
  };

  return (
    <>
      <div className="book-container grid md:grid-cols-2 gap-14 mt-10">
        <div className=" bg-slate-200 p-20 rounded-xl">
          <img
            className=" w-80 flex justify-center mx-auto"
            src={book.image}
            alt=""
          />
        </div>
        <div className="book-details-container flex flex-col gap-4">
          <h1 className=" text-4xl font-semibold">{book.bookname}</h1>
          <p>By : {book.author}</p>
          <hr />
          <h4>{book.category}</h4>
          <hr />
          <p className=" text-gray-600">
            <span className=" font-bold text-gray-800">Review: </span>
            {book.review}
          </p>
          <div className=" flex flex-col gap-4">
            <div className=" flex items-center gap-5">
              <h3 className=" font-bold">Tag</h3>
              <div className=" flex gap-2">
                {book.tags.map((tag, index) => (
                  <button
                    className="p-2 px-4 text-green-700 bg-green-100 rounded-full"
                    key={index}>
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
            <hr />
            <div className="pages-container w-[50%] flex flex-col gap-3">
              <div className=" flex items-center justify-between">
                <h4 className=" text-gray-500">Number of pages: </h4>
                <h4 className="font-semibold">{book.totalPages}</h4>
              </div>

              <div className=" flex items-center justify-between">
                <h4 className=" text-gray-500">Publisher:</h4>
                <h4 className="font-semibold">{book.publisher}</h4>
              </div>

              <div className=" flex items-center justify-between">
                <h4 className=" text-gray-500">Year of Publishing:</h4>
                <h4 className="font-semibold">{book.yearOfPublishing}</h4>
              </div>

              <div className=" flex items-center justify-between">
                <h4 className=" text-gray-500">Rating:</h4>
                <h4 className="font-semibold">{book.rating}</h4>
              </div>
            </div>
            <div className=" flex gap-4">
              <Link>
                <button onClick={handleRead} className="btn btn-outline px-8">
                  Read
                </button>
              </Link>
              <Link>
                <button
                  onClick={handleWishlist}
                  className="btn bg-sky-500 text-white px-8">
                  Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default SingleBookDetails;
