import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import { useLoaderData } from 'react-router-dom';
import Team from "../../Components/Team/Team";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from './../../Components/Loader/Loader';

const Home = () => {
    const data = useLoaderData()
    const {loading} = useContext(AuthContext)
    if(loading) return <Loader/>
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