import CategoryCard from "@/Components/CustomerComponents/Cards/CategoryCard/CategoryCard";
import ProductCard from "@/Components/CustomerComponents/Cards/ProductCard/ProductCard";
import UserSideNav from "@/Components/CustomerComponents/CustomerAdmin/UserSideNav";
import { categoryItems } from "@/data/data";

const demo = () => {
  return (
    <>
      <section className="py-3 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        
        <ProductCard imageURL={"/images/home/Aloe-Vera-Leaf-each.webp"} title={"Aloe Vera Leaf"} quantity={"each"} price={15} offer={8}/>
        <ProductCard imageURL={"/images/home/Aloe-Vera-Leaf-each.webp"} title={"Aloe Vera Leaf"} quantity={"each"} price={15} offer={8}/>
        <ProductCard imageURL={"/images/home/Aloe-Vera-Leaf-each.webp"} title={"Aloe Vera Leaf"} quantity={"each"} price={15} offer={8}/>
        <ProductCard imageURL={"/images/home/Aloe-Vera-Leaf-each.webp"} title={"Aloe Vera Leaf"} quantity={"each"} price={15} offer={8}/>
        <ProductCard imageURL={"/images/home/Aloe-Vera-Leaf-each.webp"} title={"Aloe Vera Leaf"} quantity={"each"} price={15} offer={8}/>
        <ProductCard imageURL={"/images/home/Aloe-Vera-Leaf-each.webp"} title={"Aloe Vera Leaf"} quantity={"each"} price={15} offer={8}/>
        <ProductCard imageURL={"/images/home/Aloe-Vera-Leaf-each.webp"} title={"Aloe Vera Leaf"} quantity={"each"} price={15} offer={8}/>
        
      </section>
    </>
  );
};

export default demo;
