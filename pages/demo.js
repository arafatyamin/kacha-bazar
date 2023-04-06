import CategoryCard from "@/Components/CustomerComponents/Cards/CategoryCard/CategoryCard";
import { categoryItems } from "@/data/data";

const demo = () => {
  return (
    <>
      <section className="py-3">
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categoryItems.map((categoryItem) => (
              <CategoryCard data={categoryItem} key={categoryItem.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default demo;
