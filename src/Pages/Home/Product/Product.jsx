import product1 from "../../../assets/images/products/1.png";
import product2 from "../../../assets/images/products/2.png";
import product3 from "../../../assets/images/products/3.png";
import product4 from "../../../assets/images/products/4.png";
import product5 from "../../../assets/images/products/5.png";
import product6 from "../../../assets/images/products/6.png";
import Headline from "../../../Components/Headline";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="flex flex-col justify-center my-4 items-center">
      <Headline title={"Our Products"} content={"Browse Our Products"}></Headline>
      <div className="my-3 grid grid-cols-3 xsm:gap-3 lg:gap-8">
        <ProductCard product={product1}></ProductCard>
        <ProductCard product={product2}></ProductCard>
        <ProductCard product={product3}></ProductCard>
        <ProductCard product={product4}></ProductCard>
        <ProductCard product={product5}></ProductCard>
        <ProductCard product={product6}></ProductCard>
      </div>
      <button className="border-2 border-orange-600 rounded-md my-3">
        <p className="text-orange-600 p-2">More Products</p>
      </button>
    </div>
  );
};

export default Product;
