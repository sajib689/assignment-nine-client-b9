
import { useParams, useLoaderData } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()
    const parseId = parseInt(id)
    const services = useLoaderData()
    const service = services.find( s => s.id === parseId)
    console.log(service)
    return (
        <div>
            <h1>{service.estate_title}</h1>
        </div>
    );
};

export default Details;