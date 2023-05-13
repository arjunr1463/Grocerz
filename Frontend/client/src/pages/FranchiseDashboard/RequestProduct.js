import React, { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

function RequestProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Product name: ${productName}, Price: ${price}`);
  };

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex gap-[10px] items-center text-[#2ad5b1] bg-white shadow-lg px-[15px] py-[10px] text-[15px] font-poppins">
        <i>
          <BsGrid3X3GapFill />
        </i>
        <span className="text-[#3d8879]">Products</span>
        <i>
          <AiOutlineRight />
        </i>
        <span className="text-[#3d8879]">Product Request</span>
      </div>
      <div class="px-[10px]">
        <div class="max-w-md mx-auto shadow-md bg-[white] p-5">
          <h2 class="text-center text-2xl lg:text-3xl font-mont font-bold text-gray-900 mb-4">
            Product Request
          </h2>
          <form class="mt-4 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm">
              <div>
                <label
                  for="product-name"
                  class="block font-poppins text-gray-700 mb-1"
                >
                  Product Name
                </label>
                <input
                  id="product-name"
                  name="product-name"
                  type="text"
                  autoComplete="product-name"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  class="appearance-none rounded-none relative block w-full py-2 px-3 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div class="mt-4">
                <label
                  for="price"
                  class="block font-poppins text-gray-700 mb-1"
                >
                  Price
                </label>
                <div class="relative rounded-md shadow-sm">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    autoComplete="price"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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

export default RequestProduct;
