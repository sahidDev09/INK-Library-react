/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";

const SingleBook = ({ books }) => {
  const { bookname, author, image, tags, category, rating } = books;

  return (
    <div className=" border rounded-xl p-5 flex flex-col gap-4">
      <div className=" bg-slate-200 rounded-xl h-[250px] p-10">
      <img className=" m-auto w-28 object-cover items-center h-full" src={image} alt="" />
      </div>
      <div className=" flex gap-2">
        {tags.map((tag, index) => (
          <button className="p-2 px-4 text-green-700 bg-green-100 rounded-full" key={index}>{tag}</button>
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
  );
};

export default SingleBook;
