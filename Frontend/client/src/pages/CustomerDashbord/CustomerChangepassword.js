import React, { useState } from 'react';

function CustomerChangepassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your password change logic goes here
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-poppins mb-2" htmlFor="oldPassword">
            Old Password
          </label>
          <input
            className="shadow appearance-none font-poppins border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="oldPassword"
            type="password"
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-poppins mb-2" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="shadow appearance-none font-poppins border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-poppins mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none font-poppins border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-poppins py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerChangepassword;
