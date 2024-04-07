import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    
    return (
        <div className="max-w-6xl mx-auto">
           <Banner/>
           <Services data={data}/>
        </div>
    );
};

export default Home;