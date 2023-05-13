import React from "react";
import CL from "../../assets/CustomerLogin/CL.png";

function CustomerLogin() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-[10px] py-[30px] px-[10px] bg-gradient-b lg:bg-gradient-to-l from-white to-gray-300">
      <div>
        <img src={CL} alt="" className="lg:h-[400px]" />
      </div>
      <div className="flex flex-col gap-[20px] px-[10px] w-full lg:w-1/2 xl:w-1/3">
        <div className="flex flex-col items-center ">
          <h className="font-mont font-semibold text-[28px] lg:text-[35px]">Welcome | Sign In</h>
          <span className="font-poppins xsmall:text-[14px] text-center mob:text-[16px]">Feel the real grocery shopping experience</span>
        </div>
        <div className="flex flex-col  gap-[10px]">
          <input type="email" placeholder="Your Email" className="border-[1px] outline-none h-[35px] px-[10px]"/>
          <input type="password" placeholder="Password" className="border-[1px] outline-none h-[35px] px-[10px]"/>
        </div>
        <div>
        <button className="text-[#7fad39] font-mont font-semibold">Forgot Password</button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-[10px] font-mont font-semibold">
          <button className="bg-[#7fad39] text-white h-[40px] w-full">SIGN IN</button>
          <button className="bg-[#d93025] text-white h-[40px] w-full">SIGN IN WITH GMAIL</button>
        </div>
        <div className="flex gap-[5px]">
          <span className="font-open">Don't have an account?</span>
          <button className="text-[#7fad39] font-poppins">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
