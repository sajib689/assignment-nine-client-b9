import ServiceCard from "../ServiceCard/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Services = ({ data }) => {
  
  return (
    <div className="mt-[100px] mb-[100px] ">
      <div>
        <h1 data-aos="zoom-in-right" className="animate__animated animate__bounce text-5xl font-bold text-center">Our Services</h1>
        <hr className="md:w-[250px] mx-auto" />
      </div>
      <div  className="mt-[80px] grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-6">
        {data.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
