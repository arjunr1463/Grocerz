import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

function RequestDeliverylocation() {
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex gap-[10px] items-center text-[#2ad5b1] bg-white shadow-lg px-[15px] py-[10px] text-[12px] lg:text-[14px] font-poppins">
        <i>
          <BsGrid3X3GapFill />
        </i>
        <span className="text-[#3d8879]">Delivery locations</span>
        <i>
          <AiOutlineRight />
        </i>
        <span className="text-[#3d8879]">Delivery location request</span>
      </div>
      <div class="px-[10px]">
        <div class="max-w-md mx-auto shadow-md bg-[white] p-5">
          <h2 class="text-center text-2xl lg:text-3xl font-mont font-bold text-gray-900 mb-4">
            Delivery location request
          </h2>
          <form class="mt-4 space-y-6" >
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm">
              <div className="flex flex-col gap-[5px]">
                <label
                  for="product-name"
                  class="block font-poppins text-gray-700 mb-1"
                >
                  State
                </label>
                <select class="font-poppins appearance-none rounded-none block w-full px-[10px] py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                  <option>Kerala</option>
                  <option>Tamilnadu</option>
                </select>
              </div>
              <div className="mt-4 flex flex-col gap-[5px]">
                <label
                  for="product-name"
                  class="block font-poppins text-gray-700 mb-1"
                >
                  District
                </label>
                <select class="font-poppins appearance-none rounded-none block w-full px-[10px] py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                  <option>Ernaklam</option>
                  <option>Thrissur</option>
                </select>
              </div>
              <div class="mt-4 flex flex-col gap-[5px]">
                <label
                  for="price"
                  class="block font-poppins text-gray-700 mb-1"
                >
                  City
                </label>
                <div class="relative rounded-md shadow-sm">
                  <input
                    id="price"
                    name="price"
                    type="text"
                    required
                    class="appearance-none rounded-none block w-full px-[10px] py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div class="mt-8">
              <button
                type="submit"
                class=" py-2 px-4 border border-transparent text-sm font-mont font-bold rounded-sm text-white bg-[#189279]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestDeliverylocation;
