import { Helmet } from "react-helmet";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Sajib Industrail | FAQ</title>
      </Helmet>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Discover How It Works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I get started with Sajib Industrial?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  To get started with Sajib Industrial, simply reach out to our
                  team. We'll guide you through the process step by step.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What services does Sajib Industrial offer?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Sajib Industrial offers a comprehensive range of services
                  designed to meet your specific needs. From consulting to
                  manufacturing, we've got you covered.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How can I benefit from Sajib Industrial?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Working with Sajib Industrial brings numerous benefits. Our
                  expertise, dedication, and commitment ensure that you receive
                  top-notch solutions tailored to your requirements.
                </p>
                <p>
                  Whether it's optimizing processes or enhancing efficiency,
                  we're here to help you achieve your goals.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
