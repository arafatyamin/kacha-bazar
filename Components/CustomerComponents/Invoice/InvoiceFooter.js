import { Button } from "antd";
import React from "react";

const InvoiceFooter = () => {
  return (
    <div>
      <section className="mt-10 bg-green-100 p-10 flex justify-between">
        <div>
          <h4 className="font-bold text-sm text-gray-600 uppercase">Payment method</h4>
          <p className="text-gray-500 text-sm font-medium">Cash</p>
        </div>
        <div>
          <h4 className="font-bold text-sm text-gray-600 uppercase">Shipping cost</h4>
          <p className="text-gray-500 text-sm font-medium">$60.00</p>
        </div>
        <div>
          <h4 className="font-bold text-sm text-gray-600 uppercase">Discount</h4>
          <p className="text-gray-500 text-sm font-medium">$0.00</p>
        </div>
        <div>
          <h4 className="font-bold text-sm text-gray-600 uppercase">Total amount</h4>
          <p className="text-red-500 font-bold text-2xl">$72.00</p>
        </div>
      </section>

      <section className="p-2">
        <div className="flex justify-between">
            <Button>Download Invoice</Button>
            <Button>Print Invoice</Button>
        </div>
      </section>
    </div>
  );
};

export default InvoiceFooter;
