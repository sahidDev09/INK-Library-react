import { useLoaderData } from "react-router-dom";

const ListedTab = () => {
  const readBooks = useLoaderData();
  

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
        Tab content 1
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
        Tab content 2
      </div>
    </div>
  );
};

export default ListedTab;
