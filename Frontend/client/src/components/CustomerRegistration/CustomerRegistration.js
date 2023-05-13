import React, { useState } from "react";
import CR from "../../assets/CustomerRegistration/CR.png";

function CustomerRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    accountType: "normal",
    bankName: "",
    accountNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add code here to submit the form data to a server or API
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-[10px] py-[30px] px-[10px] bg-gradient-b lg:bg-gradient-to-r from-white to-gray-300">
      <div className="w-full lg:w-1/2 flex flex-col gap-[25px] ">
        <div className="text-[28px] font-poppins text-gray-700">
          <h>Register Form</h>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="border-[1px] h-[80px] p-2 w-full outline-none"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <select
              className="border-[1px] p-2 w-full outline-none"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">-- Select State --</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="district"
            >
              District
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="pincode"
            >
              Pincode
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <p className="block text-gray-700 font-mont font-semibold mb-2">
              Account Type
            </p>
            <div className="flex xsmall:flex-col xsmall:gap-[10px] mob:gap-[10px] mob:flex-row justify-start">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="accountType"
                  value="normal"
                  checked={formData.accountType === "normal"}
                  onChange={handleChange}
                />
                <span className="ml-2 font-poppins">Normal Account</span>
              </label>
              <label className="inline-flex items-center ">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="accountType"
                  value="primary"
                  checked={formData.accountType === "primary"}
                  onChange={handleChange}
                />
                <span className="ml-2 font-poppins">Primary Account</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-mont font-semibold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="border-[1px] p-2 w-full outline-none"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {formData.accountType === "primary" && (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-mont font-semibold mb-2"
                  htmlFor="bankDetails"
                >
                  Pan Card Number
                </label>
                <input
                  className="border-[1px] p-2 w-full outline-none"
                  id="bankDetails"
                  name="bankDetails"
                  value={formData.bankDetails}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-mont font-semibold mb-2"
                  htmlFor="bankDetails"
                >
                  Bank Details
                </label>
                <textarea
                  className="border-[1px] h-[80px] p-2 w-full outline-none"
                  id="bankDetails"
                  name="bankDetails"
                  value={formData.bankDetails}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-mont font-semibold mb-2"
                  htmlFor="bankDetails"
                >
                  IFSC Code
                </label>
                <input
                  className="border-[1px] p-2 w-full outline-none"
                  id="bankDetails"
                  name="bankDetails"
                  value={formData.bankDetails}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-blue-500 font-mont font-bold text-white h-[40px] w-[120px] rounded-[0.2rem] hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <img src={CR} alt="" className="md:h-[500px]" />
      </div>
    </div>
  );
}

export default CustomerRegistration;
