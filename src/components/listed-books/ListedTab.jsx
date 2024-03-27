import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredReadbook,
  getStoredWishlistbook,
} from "../../utility/LocalStorage";
import SingleReadBook from "./SingleReadBook";
import SingleWishbook from "./SingleWishbook";

const ListedTab = () => {
  const books = useLoaderData();

  const [rbook, setRbook] = useState([]);
  const [wishbook, setWishbook] = useState([]);

  const [displayBooks, setDisplayBooks] = useState([]);
  const [displayWishlist, setDisplayWishlist] = useState([]);

  // code for read book

  useEffect(() => {
    const storedRids = getStoredReadbook();
    if (books.length > 0) {
      const booksRead = [];
      for (const id of storedRids) {
        const book = books.find((book) => book.id === id);
        if (book) {
          booksRead.push(book);
        }
      }

      setRbook(booksRead);
      setDisplayBooks(booksRead);
    }
  }, [books]);

  //code for wishlist

  useEffect(() => {
    const storedWishId = getStoredWishlistbook();
    if (books.length > 0) {
      const booksWish = [];
      for (const id of storedWishId) {
        const book = books.find((book) => book.id === id);
        if (book) {
          booksWish.push(book);
        }
      }
      setWishbook(booksWish);
      setDisplayWishlist(booksWish);
    }
  }, [books]);

  //code for sort functionality

  const sortByRating = () => {
    const sortedBooks = [...rbook].sort((a, b) => a.rating - b.rating); 
    const sortedWish = [...wishbook].sort((a, b) => b.rating - a.rating); 
    setDisplayBooks(sortedBooks.reverse());
    setDisplayWishlist(sortedWish);
  };

  const sortByPages = () => {
    const sortedBooks = [...rbook].sort((a, b) => b.totalPages - a.totalPages);
    const sortedWish = [...wishbook].sort((a, b) => b.totalPages - a.totalPages); 
    setDisplayBooks(sortedBooks);
    setDisplayWishlist(sortedWish);
  };

  const sortByYear = () => {
    const sortedBooks = [...rbook].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); 
    const sortedWish = [...wishbook].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); 
    setDisplayBooks(sortedBooks);
    setDisplayWishlist(sortedWish);
  };

  return (
    <div>
      <div className="w-full mb-5">
        <div className="bg-green-600 text-white w-32 mx-auto rounded-full justify-center hidden lg:flex border">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Sort by</summary>
                <ul className="w-44">
                  <li className="text-black">
                    <button onClick={() => sortByRating()}>Rating</button>
                  </li>
                  <li className="text-black">
                    <button onClick={() => sortByPages()}>
                      Number of Pages
                    </button>
                  </li>
                  <li className="text-black">
                    <button onClick={() => sortByYear()}>Published year</button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Book"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Total read books : {rbook.length}
          <div>
            {displayBooks.map((sbook) => (
              <SingleReadBook key={sbook.id} sbook={sbook}></SingleReadBook>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Total wishlist book is : {wishbook.length}
          <div>
            {displayWishlist.map((wish, index) => (
              <SingleWishbook key={index} wish={wish}></SingleWishbook>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedTab;
