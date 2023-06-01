import PageHeader from "@/Components/CommonComponents/PageHeader/PageHeader";
import Head from "next/head";
import CustomerLayout from "@/Layouts/CustomerLayout";
import handleStatus from "@/auth/handleStatus";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy & Policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <PageHeader title={"Privacy & Policy"} />
        <section>
          <div className="container">
            <div className="py-16">
              <div>
                <h2 className="mb-2 text-2xl font-medium">
                  Last updated: February 15, 2022
                </h2>
                <p className="mb-3">
                  At KachaBazar, accessible from kachabazar dot com, one of our
                  main priorities is the privacy of our visitors. This Privacy
                  Policy document contains types of information that is
                  collected and recorded by KachaBazar and how we use it. If you
                  have additional questions or require more information about
                  our Privacy Policy, do not hesitate to contact us.we may
                  receive additional information about you such as your name,
                  email address, phone number, the contents of the message
                  and/or attachments you may send us, and any other information
                  you may choose to provide. When you register for an Account,
                  we may ask for your contact information, including items such
                  as name, company name, address, email address, and telephone
                  number.
                </p>
                <p>
                  This Privacy Policy applies only to our online activities and
                  is valid for visitors to our website with regards to the
                  information that they shared and/or collect in KachaBazar.we
                  may receive additional information about you such as your
                  name, email address, phone number, the contents of the message
                  and/or attachments you may send us, we may ask for your
                  contact information, including items such as name, company
                  name, address, email address, and telephone number. This
                  policy is not applicable to any information collected offline
                  or via channels other than this website. Our Privacy Policy
                  was created with the help of the Free Privacy Policy
                  Generator.
                </p>
              </div>
              <div className="mt-3">
                <h2 className="mb-2 text-2xl font-medium">Consent</h2>
                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
              </div>
              <div className="mt-3">
                <h2 className="mb-2 text-2xl font-medium">
                  Information we collect
                </h2>
                <p className="mb-3">
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information. If you contact us directly, we may receive
                  additional information about you such may choose to provide.
                  When you register for an Account, we may ask for your contact
                  information, including items such as name, company name,
                  address, email address, and telephone number.
                </p>
                <p>
                  Please note that the Company will not ask you to share any
                  sensitive data or information via email or telephone. If you
                  receive any such request by email or telephone, please do not
                  respond/divulge any sensitive data or information and forward
                  the information relating to the same to
                </p>
              </div>
              <div className="mt-3">
                <h2 className="mb-2 text-2xl font-medium">
                  How we use your information
                </h2>
                <p className="mb-3">
                  We use the information we collect in various ways, including
                  to:
                </p>
                <ul className="mt-3 list-disc list-inside">
                  <li>
                    <p className="inline-block">
                      Provide, operate, and maintain our website, to provide you
                      with updates and other information.
                    </p>
                  </li>
                  <li>
                    <p className="inline-block mt-2">
                      Improve, personalize, and expand our website,and other
                      information relating to the website.
                    </p>
                  </li>
                  <li>
                    <p className="inline-block mt-2">
                      Understand and analyze how you use our website, to provide
                      you with updates and other information relating to the
                      website.
                    </p>
                  </li>
                  <li>
                    <p className="inline-block mt-2">
                      Develop new products, services, features, and
                      functionality,and other information relating to the
                      website.
                    </p>
                  </li>
                  <li>
                    <p className="inline-block mt-2">
                      Communicate with you, either directly or through one of
                      our partners, including for customer service, to provide
                      you with updates.
                    </p>
                  </li>
                  <li>
                    <p className="inline-block mt-2">
                      Send you emails. To provide you with updates and other
                      information relating to the website, and for marketing and
                      promotional purposes
                    </p>
                  </li>
                  <li>
                    <p className="inline-block mt-2">
                      Find and prevent fraud. To provide you with updates and
                      other information relating to the website, and for
                      marketing and promotional purposes
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <h2 className="mb-2 text-2xl font-medium">Log Files</h2>
                <p>
                  KachaBazar follows a standard procedure of using log files.
                  These files log visitors when they visit websites. All hosting
                  companies do this and a part of hosting. The information
                  collected by log files include internet protocol (IP)
                  addresses, browser type, Internet Service Provider (ISP), date
                  and time stamp, referring/exit pages, and possibly the number
                  of clicks. These are not linked to any information that is
                  personally identifiable. The purpose of the information is for
                  analyzing trends, administering the site, tracking users'
                  movement on the website, and gathering demographic
                  information.
                </p>
              </div>
              <div className="mt-3">
                <h2 className="mb-2 text-2xl font-medium">
                  Advertising Partners Privacy Policies
                </h2>
                <p>
                  You may consult this list to find the Privacy Policy for each
                  of the advertising partners of KachaBazar. Third-party ad
                  servers or ad networks uses technologies like cookies,
                  JavaScript, or Web Beacons that are used in their respective
                  advertisements and links that appear on KachaBazar, which are
                  sent directly to users' browser. They automatically receive
                  your IP address when this occurs. These technologies are used
                  to measure the effectiveness of their advertising campaigns
                  and/or to personalize the advertising content that you see on
                  websites that you visit. Note that KachaBazar has no access to
                  or control over these cookies that are used by third-party
                  advertisers.
                </p>
              </div>
              <div className="mt-3">
                <h2 className="mb-2 text-2xl font-medium">
                  Third Party Privacy Policies
                </h2>
                <p className="mb-3">
                  Third-party ad servers or ad networks uses technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on KachaBazar,
                  which are sent directly to users' browser. They automatically
                  receive your IP address when this occurs. These technologies
                  are used to measure the effectiveness of their advertising
                  campaigns and/or to personalize the advertising content that
                  you see on websites that you visit. Note that KachaBazar has
                  no access to or control over these cookies that are used by
                  third-party advertisers.
                </p>
                <p>
                  KachaBazar's Privacy Policy does not apply to other
                  advertisers or websites. Thus, we are advising you to consult
                  the respective Privacy Policies of these third-party ad
                  servers for more detailed information. It may include their
                  practices and instructions about how to opt-out of certain
                  options. You can choose to disable cookies through your
                  individual browser options. To know more detailed information
                  about cookie management with specific web browsers, it can be
                  found at the browsers' respective websites.
                </p>
              </div>
              <div className="mt-3">
                <h2 className="mb-2 text-2xl font-medium">
                  CCPA Privacy Rights
                </h2>
                <p>
                  Under the CCPA, among other rights, California consumers have
                  the right to: Request that a business that collects a
                  consumer's personal data disclose the categories and specific
                  pieces of personal data that a business has collected about
                  consumers. Request that a business delete any personal data
                  about the consumer that a business has collected. Request that
                  a business that sells a consumer's personal data, not sell the
                  consumer's personal data. If you make a request, we have one
                  month to respond to you. If you would like to exercise any of
                  these rights, please contact us.
                </p>
              </div>
              <div className="mt-3">
                <h2 className="mb-2 text-2xl font-medium">
                  Children's Information
                </h2>
                <p className="mb-3">
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.Request that a business delete any personal
                  data about the consumer that a business has collected. If you
                  make a request, we have one month to respond to you. If you
                  would like to exercise any of these rights, please contact us.
                </p>
                <p>
                  KachaBazar does not knowingly collect any Personal
                  Identifiable Information from children under the age of 13. If
                  you think that your child provided this kind of information on
                  our website, we strongly encourage you to contact us
                  immediately and we will do our best efforts to promptly remove
                  such information from our records.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export async function getServerSideProps(context) {
  return await handleStatus(context);
}

PrivacyPolicy.getLayout = (page) => {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return <CustomerLayout loggedIn={loggedIn}>{page}</CustomerLayout>;
};

export default PrivacyPolicy;
