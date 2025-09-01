import React from "react";
import ProductList from "../components/ProductList";

function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">All Products</h2>
      <ProductList />
    </div>
  );
}

export default Products;
