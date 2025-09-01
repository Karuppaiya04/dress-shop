import React from "react";

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  // Check if already in cart (by id and name)
  const exists = cart.find(
    (item) => item.id === product.id && item.name === product.name
  );
  if (!exists) {
    cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

function ProductCard({ product, onClick }) {
  // Dynamic background color based on category
  let bgColor = "bg-white";
  if (product.category === "Men")
    bgColor =
      "bg-gradient-to-tr from-blue-200 via-cyan-100 to-blue-100 bg-size-200 animate-gradient-bg";
  if (product.category === "Women")
    bgColor =
      "bg-gradient-to-tr from-pink-200 via-fuchsia-100 to-pink-100 bg-size-200 animate-gradient-bg";
  if (product.category === "Kids")
    bgColor =
      "bg-gradient-to-tr from-yellow-200 via-green-100 to-yellow-100 bg-size-200 animate-gradient-bg";

  return (
    <div
      className={`${bgColor} rounded-xl shadow-md p-4 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-40 h-40 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
        {product.name}
      </h3>
      <p className="text-blue-600 font-bold mb-2 group-hover:text-pink-600 transition-colors duration-300">
        ₹{product.price}
      </p>
      <button
        className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-2 rounded shadow hover:from-pink-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-pulse hover:animate-none"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-pink-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

export default ProductCard;
