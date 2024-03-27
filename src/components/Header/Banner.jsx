import { Link } from "react-router-dom";
import heroimg from "/src/assets/images/pngwing 1.png";

const Banner = () => {
  return (
    <div className=" md:flex items-center justify-between w-full md:h-[500px] rounded-xl bg-slate-200 md:p-20 p-5 mt-10 md:text-start text-center">
      <div className=" flex flex-col gap-6 mb-5 md:mb-0">
        <h1 className=" md:text-6xl text-3xl font-semibold">
          Books to freshen up your bookshelf
        </h1>
        <Link to="/listedbook">
          <button className=" btn btn-success text-white">View The List</button>
        </Link>
      </div>
      <img className="w-40 md:w-96 mx-auto" src={heroimg} alt="" />
    </div>
  );
};

export default Banner;
