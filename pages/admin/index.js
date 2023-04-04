import AdminLayout from "@/Layouts/AdminLayout";

const admin = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <div>Side Nav</div>
        <div>Content</div>
      </div>
    </div>
  );
};

admin.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default admin;
