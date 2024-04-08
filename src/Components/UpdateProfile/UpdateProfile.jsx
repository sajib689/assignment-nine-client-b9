import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Swal } from 'sweetalert2';



const UpdateProfile = () => {
    const {user} = useContext(AuthContext)
    const [displayName, setDisplayName] = useState(user?.displayName || '')
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '')

    const handleUpdateProfile = e => {
      
        updateProfile(user, {
            displayName: displayName,
            photoURL: photoURL
        })
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
    console.log(user)
    return (
        <div className="w-full mb-[50px] bg-base-200 mx-auto mt-5 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center animate__animated animate__bounce">Update Profile</h1>
        <form onSubmit={handleUpdateProfile}  noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="displayName"
              id="name"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
            onChange={(e) => setPhotoURL(e.target.value)}
            value={photoURL}
              type="text"
              name="photoURL"
              id="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-[#fc5a34] text-white">
            Update
          </button>
        </form>
     
    
        
      </div>
    );
};

export default UpdateProfile;