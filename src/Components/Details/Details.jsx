import { useParams, useLoaderData } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const parseId = parseInt(id);
  const services = useLoaderData();
  const service = services.find((s) => s.id === parseId);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = service;
  return (
    <div className="max-w-6xl mx-auto hero mb-[80px] mt-[50px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="lg:w-[700px] md:w-[700px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{estate_title}</h1>
          <p className="py-6">
           {description}
          </p>
          <p>Area: {area}</p>
          <p>Status: {status}</p>
          <p>Facilities:</p>
          <ul className="list-disc ms-3">
            {
                facilities.map(facility => 
                <li key={facility}>
                    {facility}
                </li>)
            }
          </ul>
          <p>Location: {location}</p>
          <p>Price: {price}</p>
          <button className="mt-4 btn bg-[#fc5a34] text-white rounded-none hover:bg-[#000]">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
