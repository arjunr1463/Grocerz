import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaListUl, FaLock, FaSignOutAlt } from "react-icons/fa";

function CustomerSidebar() {
  return (
    <div className="bg-gradient-to-b bg-white shadow-lg rounded-md font-poppins h-full flex flex-col justify-between p-6">
      <div>
        <h2 className="text-3xl font-mont font-bold mb-6">
          Arjun Ramakrishnan
        </h2>
        <ul className="flex flex-col gap-[15px]">
          <li className="hover:text-gray-200 transition-colors duration-200 ease-in-out">
            <Link to="/customerprofile" className="flex items-center gap-2">
              <FaUserAlt className="w-5 h-5" />
              <span>Manage My Account</span>
            </Link>
          </li>
          <li className="hover:text-gray-200 transition-colors duration-200 ease-in-out">
            <Link to="/customer-myorder" className="flex items-center gap-2">
              <FaListUl className="w-5 h-5" />
              <span>My Orders</span>
            </Link>
          </li>
          <li className="hover:text-gray-200 transition-colors duration-200 ease-in-out">
            <Link
              to="/customer-changepassword"
              className="flex items-center gap-2"
            >
              <FaLock className="w-5 h-5" />
              <span>Change Password</span>
            </Link>
          </li>
          <li className="hover:text-gray-200 transition-colors duration-200 ease-in-out">
            <a href="#logout" className="flex items-center gap-2">
              <FaSignOutAlt className="w-5 h-5" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CustomerSidebar;
