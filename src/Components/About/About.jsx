import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
AOS.init();
const About = () => {
  return (
    <>
      <Helmet>
        <title>Sajib Industrail | About Us</title>
      </Helmet>
      <div className="hero mb-[60px] mt-[60px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            data-aos="fade-down-right"
            src="https://cdn.pixabay.com/photo/2016/09/02/18/38/factory-1639990_640.jpg"
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 data-aos="fade-down-left" className="text-5xl font-bold">
              Welcome to Sajib Industrial
            </h1>
            <p data-aos="fade-down-right" className="py-6">
              We are a leading provider of industrial solutions, specializing in
              Warehouses, Factories, Production plants, Industrial parks, Cold
              storage facilities, Power plants, and more. Our mission is to
              deliver high-quality, innovative solutions to meet the diverse
              needs of our clients.
            </p>
            <button
              data-aos="fade-down-left"
              className="btn bg-[#fc5a34] text-white rounded-none hover:bg-[#000]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
