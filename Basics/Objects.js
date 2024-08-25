const Cart = {
    category: ["food", "electronic", "clothing", "toys", "books", "furniture"],
    price: {
      food: 100,
      electronics: 200,
      clothing: 300,
      toys: 400,
      books: 500,
      furniture: 600,
    },
    discount: 10,
  };
  
  console.log(Cart["category"][2]);
  console.log(Cart["price"]["electronics"]);
  delete Cart.discount;
  //hasOwnProperty btata hai ki ye key hmare object m present hai ki nahi
  console.log(Cart.hasOwnProperty("discount"));
  console.log(Cart.hasOwnProperty("category"[2]));
  // console.log(Cart["price"]);
  // console.log(Cart["discount"]);
  // console.log(Cart);
  