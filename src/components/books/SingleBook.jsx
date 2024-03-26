/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBook = ({ books }) => {
  const { id, bookname, author, image, tags, category, rating } = books;

  return (
    <div>
      <Link to={`/book/${id}`}>
        <div className=" border rounded-xl p-5 flex flex-col gap-4 hover:border hover:border-amber-600 transition-all">
          <div className=" bg-slate-200 rounded-xl h-[250px] p-10 drop-shadow-md">
            <img
              className="m-auto w-28 object-cover items-center h-full"
              src={image}
              alt=""
            />
          </div>
          <div className=" flex gap-2">
            {tags.map((tag, index) => (
              <button
                className="p-2 px-4 text-green-700 bg-green-100 rounded-full"
                key={index}>
                {tag}
              </button>
            ))}
          </div>
          <h1 className=" text-xl font-bold">{bookname}</h1>
          <p className=" text-gray-600">By: {author}</p>
          <hr />
          <div className=" flex items-center justify-between">
            <p>{category}</p>
            <div className=" flex items-center gap-2">
              <p>{rating}</p>
              <FaRegStar></FaRegStar>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleBook;
