import { getBooks } from "../../Utlitis";
import AllServiceCard from "./AllServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from 'react-helmet';
AOS.init();
const AllServices = () => {
  const allServices = getBooks();
  return (
   <>
   <Helmet>
        <title>Sajib Industrail | All Services</title>
      </Helmet>
   <div data-aos="fade-down-right" className="mt-8 mb-8 container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Service Name</th>
              <th className="p-3">Customer Name</th>
              <th className="p-3">Area</th>
              <th className="p-3">Location</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {allServices.map((service) => (
              <AllServiceCard
                service={service}
                key={service.id}
              ></AllServiceCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </>
  );
};

export default AllServices;
