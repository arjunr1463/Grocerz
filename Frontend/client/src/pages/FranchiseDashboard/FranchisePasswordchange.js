import React, { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

function FranchisePasswordchange() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };
  return (
    <div className="pb-[20px] flex flex-col gap-[25px]">
      <div className="flex gap-[10px] items-center text-[#2ad5b1] bg-white shadow-lg px-[15px] py-[10px] text-[15px] font-poppins">
        <i>
          <BsGrid3X3GapFill />
        </i>
        <span className="text-[#3d8879]">Change Password</span>
        <i>
          <AiOutlineRight />
        </i>
        <span className="text-[#3d8879]">Change password</span>
      </div>
      <div className="flex flex-col gap-[10px] items-center px-[10px]">
        <h className="font-mont font-bold text-[22px]">Change Password</h>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-[15px] font-poppins p-5 shadow-lg bg-white"
        >
          <div className="flex">
            <label
              htmlFor="current-password"
              className="block font-medium text-gray-700 w-full"
            >
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              className="border border-gray-300 rounded-sm outline-none px-3 py-2 w-full"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="new-password"
              className="block font-medium text-gray-700 w-full"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="border border-gray-300 rounded-sm outline-none px-3 py-2 w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="confirm-password"
              className="block font-medium text-gray-700 w-full"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="border border-gray-300 rounded-sm outline-none px-3 py-2 w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-sm outline-none"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default FranchisePasswordchange;
