import React from "react";
import Logo from "../../assets/Logo/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import skrill from "../../assets/Footer/skrill.png";
import AE from "../../assets/Footer/AE.png";
import bitcoin from "../../assets/Footer/bitcoin.png";
import MC from "../../assets/Footer/MC.png";
import PP from "../../assets/Footer/PP.png";
import visa from "../../assets/Footer/visa.png";

function Footer() {
  return (
    <footer className="bg-[#292929] text-gray-200  px-[20px] pt-[25px] pb-[10px]">
      <div className="flex flex-col lg:flex-row justify-between border-b-[1px] border-black/30 pb-[20px]">
        <div className="flex  py-6">
          <img src={Logo} alt="logo" className="h-12" />
        </div>
        <div className="flex flex-col gap-[15px] justify-center pb-6">
          <h4 className="text-lg font-mont font-semibold mr-4">Useful Links</h4>
          <ul className="text-sm flex font-mont">
            <div className="flex flex-col gap-[10px]">
              <li className="mr-4 mb-2">
                <a href="/home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/franchiselogin" className="hover:text-white">
                  Franchise Login
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/franchiseregistration" className="hover:text-white">
                  Franchise Registration
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/contact-us" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/terms-of-use" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
            </div>
            <div className="flex flex-col gap-[10px]">
              <li className="mr-4 mb-2">
                <a href="/customerlogin" className="hover:text-white">
                  Customer Sign in
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/customerregistration" className="hover:text-white">
                  Customer Registration
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/combo-offers" className="hover:text-white">
                  Combo Offers
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/offers" className="hover:text-white">
                  Offers
                </a>
              </li>
              <li className="mr-4 mb-2">
                <a href="/refund-policy" className="hover:text-white">
                  Refund Policy
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className=" py-8 flex flex-col gap-[15px]">
          <div>
            <h4 className="text-lg mb-4 font-bold font-mont">
              Subscribe to our newsletter
            </h4>
            <div className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className=" text-white font-poppins rounded-sm py-2 px-4 outline-none"
              />
              <button className="bg-yellow-300 text-green-900 rounded-sm py-2 px-4 font-mont font-semibold hover:bg-yellow-400 transition-colors duration-300 focus:outline-none">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-4">
              Get the latest updates on products, offers, and more.
            </p>
          </div>
          <div className="flex xsmall:flex-col mob:flex-row gap-[15px]">
            <a
              href="http://www.instagram.com/theblueskiesacademy"
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #833AB4, #FD1D1D)",
                }}
                className="text-white px-[8px] py-[8px] rounded-[3rem]"
              >
                <InstagramIcon style={{ fontSize: "26px" }} />
              </div>
            </a>

            <a
              href="http://www.facebook.com/TheBlueskiesAcademy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#3B5998] text-white px-[8px] py-[8px] rounded-[3rem]">
                <FacebookIcon style={{ fontSize: "26px" }} />
              </div>
            </a>

            <a
              href="http://www.twitter.com/blueskiesacdmy"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#1DA1F2] text-white px-[8px] py-[8px] rounded-[3rem]">
                <TwitterIcon style={{ fontSize: "26px" }} />
              </div>
            </a>
            <a
              href="https://www.pinterest.com/blueskiesacademy/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#BD081C] text-white px-[8px] py-[8px] rounded-[3rem]">
                <PinterestIcon style={{ fontSize: "26px" }} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="font-poppins pt-[10px] flex flex-col gap-[10px] lg:flex-row justify-between">
        <span className="text-[14px] text-center">
          Copyright © 2023 All rights reserved @ grocerz.store.com
        </span>
        <div className="flex gap-[10px] justify-center">
          <img src={skrill} alt="" className="h-[25px] lg:h-[30px]" />
          <img src={bitcoin} alt="" className="h-[25px] lg:h-[30px]" />
          <img src={AE} alt="" className="h-[25px] lg:h-[30px]" />
          <img src={PP} alt="" className="h-[25px] lg:h-[30px]" />
          <img src={MC} alt="" className="h-[25px] lg:h-[30px]" />
          <img src={visa} alt="" className="h-[25px] lg:h-[30px]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
