import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AllServiceCard = ({service}) => {
    const {estate_title,area,location,price} = service
    const {user} = useContext(AuthContext)
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
        <td className="p-3">
          <p>{estate_title}</p>
        </td>
        <td className="p-3">
          <p>{user?.displayName}</p>
        </td>
        <td className="p-3">
          <p>{area}</p>
        </td>
        <td className="p-3">
          <p>{location}</p>
        </td>
        <td className="p-3">
          <p>{price}</p>
        </td>
        <td className="p-3  ">
          Pending
        </td>
      </tr>
    );
};

export default AllServiceCard;