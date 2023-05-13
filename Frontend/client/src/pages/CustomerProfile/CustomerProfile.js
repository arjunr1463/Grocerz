import React from "react";
import { MdModeEditOutline } from "react-icons/md";

function CustomerProfile() {
  return (
    <div className="p-4  rounded-lg  flex flex-col gap-8">
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold text-gray-800 font-mont">Account Information</h2>
    <i className="text-gray-500 hover:text-gray-800 cursor-pointer">
      <MdModeEditOutline />
    </i>
  </div>
  <div className="flex flex-col gap-4 font-open">
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-gray-800">Name:</span>
      <span className="text-gray-600">Arjun Ramakrishnan</span>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-gray-800">Email:</span>
      <span className="text-gray-600">arjunr1463@gmail.com</span>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-gray-800">Account Type:</span>
      <span className="text-gray-600">Normal</span>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-gray-800">Address:</span>
      <span className="text-gray-600">Dwaraka House, Kurikkilad Post, Vadakara</span>
      <span className="text-gray-600">Kozhikode District, Kerala</span>
      <span className="text-gray-600">Thrissur</span>
    </div>
  </div>
</div>
  );
}

export default CustomerProfile;
