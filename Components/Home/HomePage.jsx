import CustomerFooter from "../CustomerComponents/CustomerFooter/CustomerFooter";
import CustomerHeader from "../CustomerComponents/CustomerHeader/CustomerHeader";
import OfferCard from "../CustomerComponents/OfferCard/OfferCard";

const HomePage = () => {
    return (
        <div>
            <CustomerHeader></CustomerHeader>
            <OfferCard></OfferCard>
            <CustomerFooter></CustomerFooter>
        </div>
    );
};

export default HomePage;