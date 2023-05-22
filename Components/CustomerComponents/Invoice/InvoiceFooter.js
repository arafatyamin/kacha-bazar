import React from "react";
import { AiOutlineCloudDownload, AiOutlinePrinter } from "react-icons/ai";

const InvoiceFooter = () => {
  return (
    <div>
      <section className="mt-10 bg-green-100 p-10 lg:flex justify-between">
        <div className="mb-3">
          <h4 className="font-bold text-sm text-gray-600 uppercase">
            Payment method
          </h4>
          <p className="text-gray-500 text-sm font-medium">Cash</p>
        </div>
        <div className="mb-3">
          <h4 className="font-bold text-sm text-gray-600 uppercase">
            Shipping cost
          </h4>
          <p className="text-gray-500 text-sm font-medium">$60.00</p>
        </div>
        <div className="mb-3">
          <h4 className="font-bold text-sm text-gray-600 uppercase">
            Discount
          </h4>
          <p className="text-gray-500 text-sm font-medium">$0.00</p>
        </div>
        <div className="mb-3">
          <h4 className="font-bold text-sm text-gray-600 uppercase">
            Total amount
          </h4>
          <p className="text-red-500 font-bold text-2xl">$72.00</p>
        </div>
      </section>

      <section className="p-2">
        <div className="md:flex justify-between p-6">
          <button className="mr-2 bg-green-500 p-2 rounded text-white font-bold">
            Download Invoice{" "}
            <AiOutlineCloudDownload className="inline ml-1"></AiOutlineCloudDownload>
          </button>
          <button className="bg-green-500 p-2 rounded text-white font-bold">
            Print Invoice{" "}
            <AiOutlinePrinter className="inline ml-1"></AiOutlinePrinter>
          </button>
        </div>
      </section>
    </div>
  );
};

export default InvoiceFooter;
