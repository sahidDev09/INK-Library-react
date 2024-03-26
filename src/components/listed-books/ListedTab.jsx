/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredReadbook,
  getStoredWishlistbook,
} from "../../utility/LocalStorage";

const ListedTab = () => {
  const books = useLoaderData();

  const [rbook, setRbook] = useState([]);
  const [wishbook, setWishbook] = useState([]);


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
    }
  }, []);

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
    }
  }, []);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Read Book"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        Total read book : {rbook.length}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Wishlist Books"
        checked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        Total wishlist book is : {wishbook.length}
      </div>
    </div>
  );
};

export default ListedTab;
