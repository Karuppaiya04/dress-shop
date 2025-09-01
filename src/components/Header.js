import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="bg-gradient-to-r from-blue-700 via-pink-500 to-yellow-400 text-white p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between shadow w-full">
      <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 md:mb-0">
          Zeesha Shopping
        </h1>
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <form className="flex items-center bg-white rounded-full px-2 py-1 w-full sm:w-60 md:w-80 shadow-md mt-2 md:mt-0 mx-auto md:mx-0">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-3 py-1 rounded-full text-gray-700 focus:outline-none text-sm sm:text-base"
        />
        <button type="submit" className="text-blue-600 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </button>
      </form>
      <nav
        className={`flex-col md:flex-row flex md:flex space-y-2 md:space-y-0 space-x-0 md:space-x-4 items-center mt-2 md:mt-0 w-full md:w-auto ${
          open ? "flex" : "hidden md:flex"
        }`}
      >
        <Link to="/" className="hover:underline w-full md:w-auto text-center">
          Home
        </Link>
        <Link
          to="/products"
          className="hover:underline w-full md:w-auto text-center"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="hover:underline flex items-center w-full md:w-auto justify-center md:justify-start text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"
            />
          </svg>
          Cart
        </Link>
      </nav>
    </header>
  );
}

export default Header;
