import ListedTab from "./ListedTab";
const ListedBooks = () => {
  return (
    <div>
      <h1 className=" text-4xl font-bold text-center my-5">Books</h1>

      <div className="w-full mb-5">
        <div className="bg-green-600 text-white w-32 mx-auto rounded-full justify-center hidden lg:flex border ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Sort by</summary>
                <ul className="w-44">
                  <li className=" text-black">
                    <a>Rating</a>
                  </li>
                  <li className=" text-black">
                    <a>Number of Pages</a>
                  </li>
                  <li className=" text-black">
                    <a>Published year</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <ListedTab></ListedTab>
      </div>
    </div>
  );
};

export default ListedBooks;
