import React from "react";

const InvoiceHeader = () => {
  return (
    <div>
      

      <section className="flex justify-between mb-20 bg-gray-200 p-6 ">
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

    <section className="bg-gray-200 flex justify-between p-6">
        <div>
            <h4 className="font-bold text-gray-600">DATE</h4>
            <p className="text-gray-500">May 21, 2023</p>
        </div>
        <div>
            <h4 className="font-bold text-gray-600">INVOICE NO.</h4>
            <p className="text-gray-500">#10067</p>
        </div>
        <div>
            <h4 className="font-bold text-gray-600">INVOICE TO.</h4>
            <p className="text-gray-500">eurttr trut</p>
            <p className="text-gray-500">edinarweg@gmail.com rturturtu</p>
            <p className="text-gray-500">rturturtu</p>
        </div>
        
    </section>
    </div>
  );
};

export default InvoiceHeader;
