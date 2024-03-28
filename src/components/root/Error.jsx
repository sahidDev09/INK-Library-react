import { Link } from "react-router-dom";
import errorimg from "/src/assets/error.jpg";

const Error = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <img className=" w-[40vw]" src={errorimg} alt="" />

      <Link to="/">
        <button className=" btn bg-gray-900 text-white">Go to Home</button>
      </Link>
    </div>
  );
};

export default Error;
