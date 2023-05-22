import React from "react";

const InvoiceHeader = () => {
  return (
    <div>
      <section className="lg:flex justify-between mb-1 bg-gray-200 p-6 rounded-lg ">
        <div>
          <h3 className="text-2xl font-bold">INVOICE</h3>
          <p>
            Status: <span className="text-red-400">Pending</span>
          </p>
        </div>
        <div>
          <p>Bambali, Sedhiou, Senegal</p>
        </div>
      </section>

      <hr className="divide-y divide-red-400"></hr>

      <section className="bg-gray-200 lg:flex justify-between p-6">
        <div className="mb-3">
          <h4 className="font-bold text-gray-600">DATE</h4>
          <p className="text-gray-500 text-sm">May 21, 2023</p>
        </div>
        <div className="mb-3">
          <h4 className="font-bold text-gray-600">INVOICE NO.</h4>
          <p className="text-gray-500 text-sm">#10067</p>
        </div>
        <div className="mb-3">
          <h4 className="font-bold text-gray-600">INVOICE TO.</h4>
          <p className="text-gray-500 text-sm">eurttr trut</p>
          <p className="text-gray-500 text-sm">edinarweg@gmail.com rturturtu</p>
          <p className="text-gray-500 text-sm">rturturtu</p>
        </div>
      </section>

      <section className="mt-6">
        <table className="mx-auto">
          <thead className="bg-gray-200">
            <tr>
              <td className="uppercase">Sr.</td>
              <td>Product name</td>
              <td>Quantity</td>
              <td>Item price</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-gray-500 text-sm">1</td>
              <td className="text-gray-500 text-sm">Test product-Red</td>
              <td className="text-sm font-bold">1</td>
              <td className="font-bold text-sm">$12.00</td>
              <td className="text-red-500 text-sm font-bold">$12.00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default InvoiceHeader;
