import React from "react";
import {
  FaFileContract,
  FaLocationArrow,
} from "react-icons/fa";
import { BsGrid3X3GapFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineRight, AiFillMail } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { BiTime,BiTimeFive } from "react-icons/bi";
import { RiMapPin2Fill } from "react-icons/ri";

function FranchiseProfile() {
  return (
    <div className="pb-[20px] flex flex-col gap-[25px]">
      <div className="flex gap-[10px] items-center text-[#2ad5b1] bg-white shadow-lg px-[15px] py-[10px] text-[15px] font-poppins">
        <i>
          <BsGrid3X3GapFill />
        </i>
        <span className="text-[#3d8879]">Profile</span>
        <i>
          <AiOutlineRight />
        </i>
        <span className="text-[#3d8879]">Franchise profile</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-[20px] px-[20px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col ">
            <span className="text-[28px] font-poppins text-[#585858]">
              Squadmind
            </span>
            <div className="">
              <span className="font-mont font-bold text-white bg-[#189279] px-[10px] py-[5px]">
                ARJUN RAMAKRISHNAN
              </span>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md flex flex-col gap-[10px] font-poppins px-[10px] py-[20px]">
            <div>
              <h className="text-[#585858] text-[22px]">Contact Information</h>
            </div>
            <div className="flex flex-col gap-[10px] font-open px-[10px] text-[14px]">
              <div className="flex items-center gap-[10px] border-b-[1px] border-gray-100">
                <i className="text-[#189279]">
                  <AiFillMail />
                </i>
                <span>arjunr1463@gmail.com</span>
              </div>
              <div className="flex items-center gap-[10px] border-b-[1px] border-gray-100">
                <i className="text-[#189279]">
                  <BsFillTelephoneFill />
                </i>
                <span>9539796304</span>
              </div>
              <div className="flex items-start gap-[10px] border-b-[1px] border-gray-100">
                <i className="text-[#189279]">
                  <GiEarthAmerica />
                </i>
                <span className="w-[350px]">
                  Dwaraka House Kurikkilad Post Vadakara,Kozhikode District ,
                  Vadakara
                </span>
              </div>
              <div className="flex">
                <span className="w-full lg:w-[350px]">
                  Dwaraka House Kurikkilad Post Vadakara,Kozhikode District,
                  Vadakara Thrissur, kerala 673104
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md px-[10px] py-[10px] font-poppins flex flex-col gap-[10px]">
            <div className="flex gap-[25px] items-center bg-[#f7f7f7] py-[10px] px-[10px]">
              <i className="text-[#88b93c] text-[24px]">
                <TiTick />
              </i>
              <span className="text-[14px]">0 Orders Completed</span>
            </div>
            <div className="flex gap-[25px] items-center bg-[#f7f7f7] py-[10px] px-[10px]">
              <i className="text-[#fea225] text-[22px]">
                <BiTime />
              </i>
              <span className="text-[14px]">0 Orders Completed</span>
            </div>
          </div>
        </div>
        <div className="font-poppins flex flex-col w-full">
          <div className="flex gap-[10px] items-center">
            <div className="flex-shrink-0 bg-[#189279] flex justify-center items-center rounded-full h-[35px] w-[35px]">
              <RiMapPin2Fill className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white shadow-lg w-full p-2">
              <h2 className="text-lg font-medium text-gray-900">Map</h2>
              <div className="flex mt-1 text-sm text-gray-500">
                <span className="mr-2 font-open">Longitude</span>
                <span className="font-open">Latitude</span>
              </div>
            </div>
          </div>

          <div className="flex gap-[10px] items-center mt-6">
            <div className="flex-shrink-0 bg-[#189279] flex justify-center items-center rounded-full h-[35px] w-[35px]">
              <FaFileContract className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white shadow-lg w-full p-2">
              <h2 className="text-lg font-medium text-gray-900">Agreement</h2>
              <div className="flex mt-1 text-sm text-gray-500">
                <span className="mr-2 font-open">Uploaded</span>
              </div>
            </div>
          </div>
          <div className="flex gap-[10px] items-center mt-6">
            <div className="flex-shrink-0 bg-[#189279] flex justify-center items-center rounded-full h-[35px] w-[35px]">
              <BiTimeFive className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white shadow-lg w-full p-2">
              <h2 className="text-lg font-medium text-gray-900">Date</h2>
              <div className="text-sm text-gray-500">2023-04-28</div>
            </div>
          </div>

          <div className="flex gap-[10px] items-center mt-6">
            <div className="flex-shrink-0 bg-[#189279] flex justify-center items-center rounded-full h-[35px] w-[35px]">
              <FaLocationArrow className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white shadow-lg w-full p-2">
              <h2 className="text-lg font-medium text-gray-900">Location</h2>
              <div className="text-sm text-gray-500 font-open">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchiseProfile;
