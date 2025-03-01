import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';
AOS.init();
const ServiceCard = ({ service }) => {
    const{id, image,estate_title,description,price,status} = service;
 
  return (
    <div  data-aos="fade-up-right" className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className='relative'>
        <img
        className="h-[230px] w-full"
          src={image}
          alt="Shoes"
        />
      </div>
      <button className='absolute btn bg-green-500 text-white border-0 btn-xs top-0 left-0 m-3'>{status}</button>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-start">
          <Link to={`details/${id}`} className="btn hover:bg-[#06121c] bg-[#fc5a34] text-white rounded-none">View Property</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
