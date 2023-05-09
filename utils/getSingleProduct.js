import axios from "axios";

const getSingleProduct = async (id) => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + `/products/${id}`);
        const {data} = await response;
        if(data.success) {
            return response.data.data;
        } else {
            console.error("Data not found from getSingleProduct");
        }
    } catch (error) {
        console.log(error);
    }
}

export default getSingleProduct;