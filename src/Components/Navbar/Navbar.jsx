import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Swal } from "sweetalert2";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign Out Success!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
          });
        }
      });
  };
  const links = (
    <>
      <li className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 text-[#fc5a34] "
              : "flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 text-[#fc5a34] "
              : "flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 text-[#fc5a34] "
              : "flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user ? (
        <li className="flex">
          <NavLink
            to="/update"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 text-[#fc5a34] "
                : "flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
            }
          >
            Update Profile
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar bg-base-200 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="font-bold text-xl">Sajib Industrail</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="items-center flex-shrink-0 hidden lg:flex">
    <div>
      {user ? (
        <img
          alt=""
          className="me-4 w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100"
          src={user?.photoURL}
        />
      ) : (
        <></>
      )}
    </div>
    <>
      {user ? (
        <Link
          onClick={handleSignOut}
          className="btn bg-[#fc5a34] text-white rounded-none hover:bg-[#000]"
        >
          Sign Out
        </Link>
      ) : (
        <>
          <Link
            to="/login"
            className="btn bg-[#fc5a34] text-white rounded-none hover:bg-[#000]"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="btn bg-[#fc5a34] text-white rounded-none hover:bg-[#000]"
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  </div>
      </div>
    </div>
  );
};

export default Navbar;
