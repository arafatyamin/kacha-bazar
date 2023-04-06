const PageHeader = ({ title }) => {
  return (
    <>
      <section className="bg-[url('/images/page-header/page-header-bg.jpg')] bg-cover bg-no-repeat bg-bottom">
        <div className="container mx-auto px-3">
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
