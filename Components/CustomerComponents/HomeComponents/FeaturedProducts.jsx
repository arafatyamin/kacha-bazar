import ProductCard from "../Cards/ProductCard/ProductCard";

const FeaturedProducts = ({ Items }) => {
    return (
        <div className="bg-gray-50 my-4 py-4">
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
};

export default FeaturedProducts;