import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

export const products = [
  {
    id: 1,
    name: "Men's Cotton Shirt",
    price: 499,
    image: "https://m.media-amazon.com/images/I/71a-0tfK5PL._SL1500_.jpg",
    category: "Men",
    description:
      "Soft and breathable cotton shirt for men. Perfect for casual and formal occasions.",
  },
  {
    id: 2,
    name: "Men's Jeans",
    price: 799,
    image:
      "https://i5.walmartimages.com/seo/Men-s-Regular-Fit-Stacked-Jeans-Patch-Distressed-Destroyed-Straight-Denim-Pants-Streetwear-Clothes_6de80804-deac-4e44-aefc-ea9afda7e64a.9c5a670bddf8b01a6387dbf80feacaa1.jpeg",
    category: "Men",
    description:
      "Trendy and comfortable jeans for men. Durable fabric with a modern fit.",
  },
  {
    id: 3,
    name: "Men's shirt",
    price: 499,
    image:
      "https://i.pinimg.com/736x/97/62/39/976239e5a9fe489617cd62753a189513.jpg",
    category: "Men",
    description:
      "Classic men's shirt with a stylish design. Great for daily wear.",
  },
  {
    id: 4,
    name: "Men's Tshirt",
    price: 799,
    image:
      "https://cdn.pixabay.com/photo/2024/02/06/18/10/ai-generated-8557635_1280.jpg",
    category: "Men",
    description:
      "Comfortable and trendy t-shirt for men. Available in multiple colors.",
  },
  {
    id: 1,
    name: "Women's shirt",
    price: 299,
    image:
      "https://www.net-a-porter.com/variants/images/1647597359943092/in/w920_q60.jpg",
    category: "Women",
    description:
      "Elegant women's shirt with a modern cut. Perfect for office and outings.",
  },
  {
    id: 2,
    name: "Women's Pants",
    price: 999,
    image:
      "https://www.net-a-porter.com/variants/images/46376663162878465/in/w920_q60.jpg",
    category: "Women",
    description:
      "Stylish and comfortable pants for women. Great for all-day wear.",
  },
  {
    id: 1,
    name: "Women's Sarees",
    price: 299,
    image:
      "https://e0.pxfuel.com/wallpapers/643/930/desktop-wallpaper-vaishnavi-chaithanya-telugu-actress-saree-lover.jpg",
    category: "Women",
    description:
      "Beautiful saree with traditional design. Perfect for festive occasions.",
  },
  {
    id: 3,
    name: "Women's Sarees",
    price: 999,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.BQ_q3sf92af3bKy0haV1qQHaLu?pid=Api&P=0&h=220",
    category: "Women",
    description:
      "Designer saree with premium fabric. Adds elegance to your wardrobe.",
  },
  {
    id: 1,
    name: "Kids' Tshirt",
    price: 1299,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.znc_H1kIqYm0hv_BlMcDqwHaIL?pid=Api&P=0&h=220",
    category: "Kids",
    description:
      "Fun and colorful t-shirt for kids. Soft fabric for all-day comfort.",
  },
  {
    id: 2,
    name: "Kids' Shoes",
    price: 599,
    image:
      "https://images.pexels.com/photos/325867/pexels-photo-325867.jpeg?auto=compress&w=300",
    category: "Kids",
    description:
      "Comfortable and durable shoes for kids. Perfect for play and school.",
  },
  {
    id: 1,
    name: "Kids' dress",
    price: 1299,
    image:
      "https://sp.yimg.com/ib/th?id=OPHS.J9MDRfbWUmxR8A474C474&o=5&pid=21.1&w=174&h=174",
    category: "Kids",
    description:
      "Adorable dress for kids. Soft material and cute design for special occasions.",
  },
  {
    id: 2,
    name: "Kids' pants",
    price: 599,
    image:
      "https://i5.walmartimages.com/seo/OVINYER-Toddler-Boy-Girl-Solid-Color-Pants-Overalls-Relaxed-Fit-Pants-For-Children-Baby-Kids-Cute-Infants-Streetwear_3ef9c861-5ae3-4537-b097-1bbcba9e7c29.09049101bdc540a48561ed5a6553966d.jpeg",
    category: "Kids",
    description: "Relaxed fit pants for kids. Easy to wear and move around in.",
  },
];

function ProductList() {
  const categories = ["Men", "Women", "Kids"];
  const navigate = useNavigate();
  return (
    <div className="space-y-10">
      {categories.map((cat) => (
        <div key={cat}>
          <h2 className="text-xl font-bold mb-4 text-blue-700">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {products
              .filter((p) => p.category === cat)
              .map((product) => (
                <ProductCard
                  key={product.id + product.name}
                  product={product}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
