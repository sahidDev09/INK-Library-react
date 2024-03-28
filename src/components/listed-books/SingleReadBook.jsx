/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SingleReadBook = ({ sbook }) => {
  const {
    id,
    image,
    bookname,
    rating,
    author,
    tags,
    totalPages,
    publisher,
    category,
    yearOfPublishing,
  } = sbook;

  return (
    <div className=" border mt-10 rounded-xl grid md:grid-cols-4 p-5 gap-8">
      <div className="img-container bg-slate-200 col-span-1 rounded-xl flex justify-center items-center">
        <img className=" w-36 p-5 m-auto" src={image} alt="" />
      </div>
      <div className="read-info col-span-3 flex flex-col gap-3">
        <h1 className=" text-2xl font-semibold">{bookname}</h1>
        <p>By: {author}</p>

        <div className=" md:flex gap-4 items-center">
          <h4 className=" font-semibold">Tag</h4>
          <div>
            {tags.map((tag, index) => (
              <button
                className="p-2 mr-2 gap-2 text-green-700 bg-green-100 rounded-full"
                key={index}>
                #{tag}
              </button>
            ))}
          </div>
          <div className=" flex items-center gap-2 text-gray-600">
            <CiLocationOn></CiLocationOn>
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="flex gap-10 text-gray-600 items-center">
          <div className="flex gap-2 items-center">
            <IoPeople></IoPeople>
            <p>Publisher : {publisher}</p>
          </div>
          <div className=" flex gap-2 items-center">
            <RiPagesLine></RiPagesLine>
            <p>{totalPages}</p>
          </div>
        </div>
        <hr />
        <div>
          <button className="p-2 mr-2 gap-2 text-blue-600 text-sm bg-blue-100 rounded-full">
            Category: {category}
          </button>
          <button className="p-2 mr-2 gap-2 text-sm text-yellow-600 bg-yellow-100 rounded-full">
            Ratings: {rating}
          </button>
          <Link to={`/book/${id}`}>
            <button className=" hover:bg-green-700 py-2 px-4  mr-2 gap-2 bg-green-600 text-white text-sm rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleReadBook;
