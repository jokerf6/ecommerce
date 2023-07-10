import Nav from "../components/nav";
import Types from "../components/types";
import Albume from "./components/albume";
import Collect from "./components/collect";
import ProductDetails from "./components/productDetails";
import Reviews from "./components/reviews";

export default function Product() {
  return (
    <main className=" w-screen h-screen px-20 py-5">
      <div className=" w-full h-full">
        <Nav />
        <hr className=" mt-2" />
        <Types />
        <Collect />
        <Reviews />
      </div>
    </main>
  );
}
