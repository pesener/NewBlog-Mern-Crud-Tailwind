import React from "react";

import { RiAdminLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [location, user]);

  return (
    <div className="bg-black">
      <div className="container mx-auto h-20 flex items-center  justify-between ">
        <div className="flex flex-col justify-center items-center text-center">
          <a
            className="text-white font-serif text-5xl font-bold pl-10"
            href="/"
          >
            NewBlog
          </a>
        </div>

        {user ? (
          <nav className=" flex gap-x-8 font-semibold text-opacity-90 text-white  pr-10  ">
            <a
              className="flex items-center gap-x-1 bg-blue-700 hover:bg-blue-800 cursor-pointer rounded-full px-2 py-1 "
              onClick={(e) => {
                navigate("/create");
              }}
            >
              <RiAdminLine size={20} />
              Admin
            </a>
            <a
              className="flex items-center gap-x-1 bg-red-800 hover:bg-red-900 cursor-pointer rounded-full px-4 py-1"
              onClick={(e) => {
                localStorage.removeItem("user");
                setUser(null);
                navigate("/");
              }}
            >
              <RiLogoutCircleLine size={20} />
              Sign Out
            </a>
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Navbar;
