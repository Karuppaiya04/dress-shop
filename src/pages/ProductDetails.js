import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../components/ProductList";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  if (!product) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-red-700">
          Product Not Found
        </h2>
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-white rounded-xl shadow-lg animate-fade-in flex flex-col items-center justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <h2 className="text-3xl font-bold mb-2 text-blue-700 text-center">
        {product.name}
      </h2>
      <p className="text-xl text-pink-600 font-semibold mb-4 text-center">
        ₹{product.price}
      </p>
      <p className="mb-4 text-gray-700 text-center">{product.description}</p>
      <p className="mb-4 text-gray-700 text-center">
        Category: <span className="font-medium">{product.category}</span>
      </p>
      <button
        className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-3 rounded shadow hover:from-pink-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-lg font-bold animate-pulse hover:animate-none mx-auto block"
        onClick={() => {
          let cart = JSON.parse(localStorage.getItem("cart") || "[]");
          const exists = cart.find(
            (item) => item.id === product.id && item.name === product.name
          );
          if (!exists) {
            cart.push({ ...product, qty: 1 });
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductDetails;
