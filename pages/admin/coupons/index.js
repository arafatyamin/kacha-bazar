import AddNewCoupons from "@/Components/AdminComponents/Coupons/AddNewCoupons";
import Button from "@/Components/AdminComponents/Button";
import CouponsTable from "@/Components/AdminComponents/Coupons/CouponsTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState, useEffect } from "react";
import handleRedirect from "@/auth/handleRedirect";
import axios from "axios";
import {} from "react";
import swal from "sweetalert";
import { toast } from "react-hot-toast";

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [newCoupon, setNewCoupon] = useState(false);

  useEffect(() => {
    getCoupons();
  }, [page]);

  const getCoupons = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          `/admin/coupons?page=${page}&limit=10`
      );
      const { coupons, ...data } = response.data.data;
      setCoupons(coupons);
      setPageData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCoupon = async (id, name, index) => {
    swal({
      title: "Are you sure?",
      text: `Delete "${name}"`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await axios.delete(
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL + `/admin/coupons/${id}`
          );
          const newCoupons = [...coupons];
          newCoupons.splice(index, 1);
          setCoupons(newCoupons);
          toast.success("Coupon Deleted");
        } catch (err) {
          console.log(err);
          toast.error("Something went wrong");
        }
      }
    });
  };

  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Coupons</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="col-span-3">
            <SearchInput placeholder={"search by coupon code/name"} />
          </div>

          <div onClick={() => setNewCoupon(true)}>
            <Button name={"Add Coupon"} />
          </div>
        </div>

        {/* coupons table  */}
        <CouponsTable
          coupons={coupons}
          deleteCoupon={deleteCoupon}
          pageData={pageData}
          page={page}
          setPage={setPage}
        />
      </div>
      <AddNewCoupons newCoupon={newCoupon} setNewCoupon={setNewCoupon} />
    </section>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "admin");
}

Coupons.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Coupons;
