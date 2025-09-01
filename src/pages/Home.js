import HomeCarousel from "../components/HomeCarousel";
import { products } from "../components/ProductList";
import ProductList from "../components/ProductList";

function Home() {
  const menProducts = products.filter((p) => p.category === "Men");
  const womenProducts = products.filter((p) => p.category === "Women");
  const kidsProducts = products.filter((p) => p.category === "Kids");
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Welcome to Zeesha shop
      </h2>
      <HomeCarousel />
      <hr className="my-8 border-t-2 border-blue-200" />
      <ProductList />
    </div>
  );
}

export default Home;
