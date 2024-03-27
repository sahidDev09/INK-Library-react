import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div
      className="hero min-h-screen my-10 rounded-md"
      style={{
        backgroundImage: "url(https://i.ibb.co/M7q9vkp/trending.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60 rounded-xl "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Trending Books</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/">
            <button className="btn btn-primary text-white">
              Go To Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
