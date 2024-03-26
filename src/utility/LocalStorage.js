const getStoredReadbook = () => {
  const storedRead = localStorage.getItem("read-book");
  if (storedRead) {
    return JSON.parse(storedRead);
  }
  return [];
};

const saveBookforRead = (id) => {
  const storedReadbook = getStoredReadbook();
  const exist = storedReadbook.find((readId) => readId === id);
  if (!exist) {
    storedReadbook.push(id);
    localStorage.setItem("read-book", JSON.stringify(storedReadbook));
  }
};

//for storing wishlist

const getStoredWishlistbook = () => {
  const storedwishlist = localStorage.getItem("wishlist-book");
  if (storedwishlist) {
    return JSON.parse(storedwishlist);
  }
  return [];
};

const saveBookforWishlist = (id) => {
  const storedWish = getStoredWishlistbook();
  const exist = storedWish.find((wishId) => wishId === id);
  if (!exist) {
    storedWish.push(id);
    localStorage.setItem("wishlist-book", JSON.stringify(storedWish));
  }
};

export {
  saveBookforRead,
  getStoredReadbook,
  getStoredWishlistbook,
  saveBookforWishlist,
};
