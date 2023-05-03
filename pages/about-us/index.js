import TeamCard from "@/Components/CustomerComponents/Cards/TeamCard/TeamCard";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { teamMembers } from "@/data/data";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex justify-center bg-[url('/images/page-header/page-header-bg.jpg')] bg-cover bg-no-repeat bg-bottom">
        <div className="container mx-auto px-3">
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
      {/* =================about us banner end */}

      <div className="custom-container">
        <div className="bg-white">
          <div className="py-10">
            <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
              <div>
                <h3 className="text-xl lg:text-3xl mb-2 font-semibold">
                  Welcome to our KachaBazar
                </h3>

                <div className="mt-3 text-base opacity-90 leading-7">
                  <p>
                    Holisticly seize parallel metrics and functional ROI.
                    Seamlessly revolutionize error-free internal or "organic"
                    sources before effective scenarios. Progressively
                    incentivize state of the art applications for efficient
                    intellectual capital. Credibly leverage existing distinctive
                    mindshare through cutting-edge schemas. Proactively
                    procrastinate team building paradigms coordinate
                    client-centric total transparent internal.
                  </p>
                  <p>
                    Dynamically embrace diverse customer service and installed
                    base paradigms. Credibly seize enterprise-wide experiences
                    for end-to-end data. Professionally brand flexible
                    alignments and cost effective architectures.
                    Enthusiastically incentivize seamless communities with
                    seamlessly facilitate revolutionary metrics with strategic
                    theme areas.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                  <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                    <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                      10K
                    </span>
                    <h4 className="text-lg font-bold mb-1">Listed Products</h4>
                    <p className="mb-0 opacity-90 leading-7">
                      Dynamically morph team driven partnerships after vertical.
                    </p>
                  </div>
                  <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                    <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                      8K
                    </span>
                    <h4 className="text-lg font-bold mb-1">Lovely Customer</h4>
                    <p className="mb-0 opacity-90 leading-7">
                      Competently productize virtual models without performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <span>
                  <img
                    src="https://kachabazar-store.vercel.app/_next/image?url=%2Fabout-us.jpg&w=1080&q=75"
                    alt=""
                  />
                </span>
              </div>
            </div>
            {/* welcome to our part end */}

            <div div className = "mt-10 lg:mt-16 text-base opacity-90 leading-7 whitespace-normal" >
              <p>
                Holisticly seize parallel metrics and functional ROI. Seamlessly
                revolutionize error-free internal or "organic" sources before
                effective scenarios. Progressively incentivize state of the art
                applications for efficient intellectual capital. Credibly
                leverage existing distinctive mindshare through cutting-edge
                schemas. Proactively procrastinate team building paradigms
                coordinate client-centric total transparent internal.
                Energistically reconceptualize global leadership for
                high-quality networks. Credibly restore an expanded array of
                systems rather than accurate results. Collaboratively synergize
                backend bandwidth without 24/7 functionalities. Credibly utilize
                proactive ideas whereas cross-media core competencies. Uniquely
                maximize professional best practices through resource maximizing
                services. Conveniently architect cross-unit web services for
                e-business imperatives.
              </p>
              <p>
                Appropriately visualize market-driven data before one-to-one
                scenarios. Collaboratively productize multifunctional ROI
                through intuitive supply chains. Enthusiastically seize
                revolutionary value and process-centric services. Competently
                harness intuitive information after interoperable markets.
                Interactively revolutionize future-proof value before granular
                sources. Dynamically embrace diverse customer service and
                installed base paradigms. Credibly seize enterprise-wide
                experiences for end-to-end data. Professionally brand flexible
                alignments and cost effective architectures. Enthusiastically
                incentivize seamless communities with seamlessly facilitate
                revolutionary metrics with strategic theme areas.
              </p>
            </div>
            <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
              <span>
                <img
                  className="w-full rounded"
                  src="https://kachabazar-store.vercel.app/_next/image?url=%2Fabout-banner.jpg&w=1920&q=75"
                  alt=""
                />
              </span>
            </div>
          </div>

          {/* =====> */}
          <div className="bg-gray-50 lg:py-20 py-10">
            <div className="max-w-screen-2xl mx-auto">
              <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
                <div className="max-w-2xl">
                  <h3 className="text-xl lg:text-3xl mb-2 font-semibold">
                    Our Founder
                  </h3>
                  <p className="mt-2 md:mt-3 font-normal block text-base">
                    We’re impartial and independent, and every day we create
                    distinctive, world-class reintermediate backend supply
                    programmes.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
                {teamMembers.map((teamMember) => (
                  <TeamCard key={teamMember._id} data={teamMember} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUs.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default AboutUs;
