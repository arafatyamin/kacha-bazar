import ProductCard from "../Cards/ProductCard/ProductCard";

const FeaturedProducts = ({Items}) => {
  return (
    <div className="bg-gray-50 my-4 py-4">
      <div className="text-center mt-10 space-y-4">
        <h2 className="font-bold text-xl sm:text-2xl">
          Popular Products for Daily Shopping
        </h2>
        <p className="text-gray-primary text-sm sm:text-base max-w-2xl mx-auto">
          See all our popular products in this week. You can choose your daily
          needs products from this list and get some special offer with free
          shipping.
        </p>
      </div>
      <section className="py-10 px-3 sm:px-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Items &&
          Items?.length > 0 &&
          Items.map((item) => (
            <ProductCard
              imgUrl={item.imgUrl}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              offer={item.offer}
            />
          ))}
      </section>
    </div>
  );
}

export default FeaturedProducts