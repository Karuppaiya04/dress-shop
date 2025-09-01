import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(items);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4 py-4 sm:py-8 w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-700 text-center">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200 mb-6">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 py-4 text-center sm:text-left"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded mx-auto sm:mx-0"
                />
                <div className="flex-1">
                  <div className="font-semibold text-base sm:text-lg">
                    {item.name}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="font-bold text-blue-700 text-base sm:text-lg">
                  ₹{item.price}
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center sm:text-right font-bold text-lg sm:text-xl text-pink-600 mb-4">
            Total: ₹{total}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
