import React, { useState, useContext } from "react";
import Logo from "../../assets/Logo/logo.png";
import { FiSearch } from "react-icons/fi";
import { BiUser, BiShoppingBag } from "react-icons/bi";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { Navmenu } from "../../context/FranchiseSidebar";

function NavBar() {
  const navigate = useNavigate();
  const { handleMenu } = useContext(Navmenu);
  const [action, setAction] = useState(false);
  const [grocery, setGrocery] = useState(false);
  const handleGroceryenter = () => {
    setGrocery(true);
  };
  const handleGroceryleave = () => {
    setGrocery(false);
  };
  const handleMouseenter = () => {
    setAction(true);
  };
  const handleMouseleave = () => {
    setAction(false);
  };

  return (
    <div>
      <div className="bg-[#000000] flex justify-center font-poppins py-[10px] px-[10px] lg:px-0 text-[13px] lg:text-[14px]">
        <span className="text-white">
          Your local shops are now under 'Local Delivery' in the menu
        </span>
      </div>
      <div className="bg-[#edeae5] flex flex-col gap-[30px] px-[10px] lg:px-[80px] py-[25px] lg:pt-[20px] lg:pb-0">
        <div className="flex justify-between items-center gap-[30px]">
          <div className="flex gap-[20px]">
            <i
              className="flex lg:hidden xsmall:text-[25px] mob:text-[30px]"
              onClick={handleMenu}
            >
              <GiHamburgerMenu />
            </i>
            <img
              src={Logo}
              alt=""
              className="xsmall:h-6 mob:h-7 lg:h-10  w-auto"
              onClick={() => navigate("/home")}
            />
          </div>
          <form className=" border-black border-b-[1px] px-[15px] py-[10px] w-1/2 hidden lg:flex ">
            <input
              className="outline-none bg-[#edeae5] w-full font-poppins"
              type="text"
              placeholder="Search independent products or shops"
            />
            <button className="">
              <FiSearch />
            </button>
          </form>
          <div className="flex gap-[10px] lg:gap-[20px] items-center xsmall:text-[25px] mob:text-[28px] lg:text-[35px]">
            <button className="flex lg:hidden">
              <FiSearch />
            </button>
            <Link to="/customerlogin" className="">
              <BiUser />
            </Link>
            <button className="">
              <BiShoppingBag />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-center font-poppins">
          <ul className="flex justify-between w-1/2 relative">
            <Link
              to="/home"
              className="cursor-pointer px-[30px] py-[10px] hover:bg-white duration-300"
            >
              Home
            </Link>
            <li
              className=" cursor-pointer px-[30px] py-[10px] hover:bg-white duration-300"
              onMouseEnter={handleMouseenter}
              onMouseLeave={handleMouseleave}
            >
              <div className="flex items-center ">
                <span>Categories</span>
                <i className="text-[12px]">
                  <AiFillCaretDown />
                </i>
                {action ? (
                  <div className="absolute top-11 left-0  flex gap-[20px] z-[999] font-open bg-white shadow-lg rounded-sm py-[15px] w-[600px]  px-[10px]">
                    <ul className="flex flex-col gap-[15px]">
                      <li
                        className="flex items-center gap-1"
                        onMouseEnter={handleGroceryenter}
                      >
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          {grocery ? <AiFillCaretRight /> : <AiFillCaretDown />}
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                      <li className="flex items-center gap-1">
                        <span>Grocery & Staples</span>
                        <i className="text-[14px]">
                          <AiFillCaretDown />
                        </i>
                      </li>
                    </ul>
                    {grocery ? (
                      <ul
                        className="flex flex-col gap-[15px]"
                        onMouseLeave={handleGroceryleave}
                      >
                        <li>Cereals & pulses</li>
                        <li>Cereals & pulses</li>
                        <li>Cereals & pulses</li>
                        <li>Cereals & pulses</li>
                        <li>Cereals & pulses</li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>
            <Link
              to="/combo-offers"
              className="cursor-pointer px-[30px] py-[10px] hover:bg-white duration-300"
            >
              Combo Offers
            </Link>
            <Link
              to="/offers"
              className="cursor-pointer px-[30px] py-[10px] hover:bg-white duration-300"
            >
              Offers
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
