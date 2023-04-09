const OrderSummary = () => {
  return (
    <div className="border rounded p-3">
      <h3 className="font-medium mb-3">Order Summary</h3>
      <div>
        {[1, 2, 3, 4, 5].map((i) => (
          <p>Product {i}</p>
        ))}
        <div>
          <input
            type="text"
            placeholder="Input your coupon code"
            className="px-3 py-2 border rounded outline-none mt-3"
          />
          <button>Apply</button>
        </div>
        <div className="mt-5 border-b">
          <ul>
            <li className="flex justify-between items-center my-2">
              Subtotal{" "}
              <span>
                <b>$0.00</b>
              </span>
            </li>
            <li className="flex justify-between items-center my-2">
              Shipping Cost{" "}
              <span>
                <b>$0.00</b>
              </span>
            </li>
            <li className="flex justify-between items-center my-2">
              Discount{" "}
              <span className="text-orange-500">
                <b>$0.00</b>
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-3 font-bold">
          <p className="flex justify-between items-center">
            Total Cost <span>$0.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
