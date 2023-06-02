import Button from "@/Components/CommonComponents/shared/Button";
import CustomerLayout from "@/Layouts/CustomerLayout";
import handleRedirect from "@/auth/handleRedirect";
import isLoggedIn from "@/auth/isLoggedIn";
import Image from "next/image";
import { AiOutlineCloudDownload, AiOutlinePrinter } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import getOrder from "@/utils/getOrder";

const Order = ({ user, order }) => {
  const router = useRouter();
  const { type } = router.query;

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (!order) {
    return (
      <div className="container">
        <div className="!bg-red-100 text-center rounded-md mt-5 py-5 px-4 py-3">
          <label>
            <span className="font-bold text-red-600"> </span> Invalid invoice id
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {type && type === "new" && (
        <div className="!bg-emerald-100 rounded-md mt-5 px-4 py-3">
          <label>
            Thank you{" "}
            <span className="font-bold text-emerald-600">{user?.name},</span>
            Your order have been received !
          </label>
        </div>
      )}

      <div>
        <div className="bg-indigo-50 p-8 space-y-8 my-8 rounded-md">
          <div className="md:flex md:justify-between border-b">
            <div>
              <h3 className="font-bold uppercase">INVOICE</h3>
              <p>
                Status:{" "}
                <span className="text-blue-400">{order?.status || ""}</span>
              </p>
            </div>
            <div className="my-4">
              <Image
                src={"https://kachabazar-store.vercel.app/logo/logo-color.svg"}
                height={100}
                width={100}
                alt="logo"
              />
              <p className="text-gray-600 mt-3">
                Kazım Karabekir, No:5 Ümraniye, İstanbul 34000
              </p>
            </div>
          </div>
          {/* top end  */}
          {/* bottom  start*/}
          <div className="md:flex md:justify-between md:items-center space-y-4 md:space-y-0 text-sm">
            <div className="flex justify-between md:block">
              <div>
                <p className="order-title">Order Date</p>
                <p className=" order-subtitle">
                  {new Date(order?.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="order-title">Probable Date of Arrival</p>
                <p className=" order-subtitle">
                  {new Date(
                    new Date(order?.createdAt).getTime() +
                      7 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div>
              <p className="order-title">INVOICE NO.</p>
              <p className=" order-subtitle">#{order?.id || ""}</p>
            </div>
            <div className="md:max-w-xs md:text-left">
              <p className="order-title">INVOICE TO.</p>
              <p className=" order-subtitle">{user?.name || ""}</p>
              <p className=" order-subtitle">{order?.phone || ""}</p>
              <p className=" order-subtitle">{order?.shippingAddress || ""}</p>
              {/* <p className="order-subtitle">{shippingAddress}</p> */}
            </div>
          </div>
          {/* bottom end  */}
        </div>
        {/* <=== product data start===> */}
        <div className="overflow-y-auto">
          <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-xs bg-gray-100">
                <th
                  scope="col"
                  className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                >
                  Sr.
                </th>
                <th
                  scope="col"
                  className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
                >
                  Item Price
                </th>
                <th
                  scope="col"
                  className=" font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-right"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 text-serif text-sm">
              {order?.products.length > 0 &&
                order?.products.map((item, index) => (
                  <tr key={item.product.id}>
                    <th className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
                      {index + 1}
                    </th>
                    <td className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
                      {item?.product.title || "N/A"}
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap font-bold text-center">
                      {item?.quantity}
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap font-bold text-center font-DejaVu">
                      {formatter.format(item?.product?.price)}
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-right font-bold font-DejaVu k-grid text-dark-500">
                      {formatter.format(item?.product?.price * item?.quantity)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* <=== product data END===> */}

        {/* <=== payment info start ====>  */}
        <div className="bg-emerald-50 px-6 py-8 md:flex md:justify-between md:items-center space-y-4 md:space-y-0 text-sm my-8 rounded-md">
          <div>
            <p className="order-title">Payment method</p>
            <p className="order-subtitle">{order?.paymentMethod}</p>
          </div>
          <div>
            <p className="order-title">Shipping cost</p>
            <p className="order-subtitle">
              {formatter.format(order?.shippingCost)}
            </p>
          </div>
          <div>
            <p className="order-title">Discount</p>
            <p className="order-subtitle">
              {order?.discount
                ? formatter.format(order?.discount?.amount)
                : formatter.format(0)}
            </p>
          </div>
          <div>
            <p className="order-title">Total Amount</p>
            <p className="order-subtitle text-green-500 opacity-100 text-2xl">
              {formatter.format(order?.total)}
            </p>
          </div>
        </div>
        {/* <=== payment info end ====>  */}
        {/* <=== Download & Print button start ===> */}
        <div className="flex flex-col sm:flex-row justify-between bg-white rounded p-6 space-y-3 sm:space-y-0">
          <Button
            text={"Download Invoice"}
            fill={true}
            Icon={AiOutlineCloudDownload}
            className={"px-4 py-2 max-w-[50%]"}
          ></Button>
          <Button
            text={"Print Invoice"}
            fill={true}
            Icon={AiOutlinePrinter}
            className={"px-4 py-2"}
          ></Button>
        </div>
        {/* <=== Download & Print button  ===>  */}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const order = await getOrder(context);

  return await handleRedirect(context, "customer", { order });
}

Order.getLayout = (page) => {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return <CustomerLayout loggedIn={loggedIn}>{page}</CustomerLayout>;
};

export default Order;
