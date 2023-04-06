import CategoryCard from "@/Components/CustomerComponents/Cards/CategoryCard/CategoryCard";
import { categoryItems } from "@/data/data";

const demo = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-6 gap-2">
            {categoryItems.map((categoryItem) => (
              <CategoryCard key={categoryItem.id} data={categoryItem} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default demo;
