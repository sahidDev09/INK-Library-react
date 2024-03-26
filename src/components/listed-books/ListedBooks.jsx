import ListedTab from "./ListedTab";

const ListedBooks = () => {
  return <div>
    <h1 className=" text-4xl font-bold text-center my-10">Books</h1>
    <button className="btn btn-success px-8 text-white mx-auto flex">Short by</button>

    <div>
        <ListedTab></ListedTab>
    </div>

  </div>;
};

export default ListedBooks;
