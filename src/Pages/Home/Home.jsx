import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import { useLoaderData } from 'react-router-dom';
import Team from "../../Components/Team/Team";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
    const data = useLoaderData()
    
    return (
        <div className="max-w-6xl mx-auto">
           <Banner/>
           <Services data={data}/>
           <Team/>
           <Testimonial/>
        </div>
    );
};

export default Home;