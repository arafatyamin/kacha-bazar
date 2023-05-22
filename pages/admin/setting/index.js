import Head from "next/head";
import AdminLayout from "@/Layouts/AdminLayout";
import handleRedirect from "@/auth/handleRedirect";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Setting = () => {
  const [data, setData] = useState({});
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/admin",
        {
          withCredentials: true,
        }
      );
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);
      await axios.put(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/admin",
        data,
        {
          withCredentials: true,
        }
      );

      toast.success("Profile updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <>
      <Head>
        <title>Setting</title>
      </Head>
      <main>
        <section className=" bg-gray-100 min-h-screen">
          <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
            <h3 className="lg:py-4 text-xl font-semibold p-2 ">Edit Profile</h3>
            <form onSubmit={handleSubmit}>
              <div className="my-3  lg:grid grid-cols-1 lg:grid-cols-3 p-6  gap-6 rounded-md shadow-sm bg-white">
                <p className="py-2">Name</p>
                <div className="col-span-2 ">
                  <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={data?.name}
                    className="w-full p-3 focus:outline-none rounded-md border bg-gray-100"
                  />
                </div>

                <p className="py-2">Email</p>
                <div className="col-span-2 ">
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={data?.email}
                    className="w-full p-3 focus:outline-none rounded-md border bg-gray-100"
                  />
                </div>

                <p className="py-2">Contact Number</p>
                <div className="col-span-2 ">
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={data?.phone}
                    className="w-full focus:outline-none p-3 rounded-md border bg-gray-100"
                  />
                </div>

                <div className="col-span-3 py-4 flex justify-end">
                  <button
                    type="submit"
                    className="py-3 px-6 bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300"
                  >
                    {updating ? "Updating" : "Update Profile"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "admin");
}

Setting.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Setting;
