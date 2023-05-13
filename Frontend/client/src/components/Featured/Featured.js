import React,{useState} from "react";
import classNames from "classnames";
import GS from "./GS";
import BB from "./BB";
import Fruits from "./Fruits";
import Vegitables from "./Vegitables";
import Fish from "./Fish";
import Meat from "./Meat";

function Featured() {
  const tabs = [
    {
      label: "Grocery & Staples",
      component: GS,
    },
    {
      label: "Bread & Bakes",
      component: BB,
    },
    {
      label: "Fruits",
      component: Fruits,
    },
    {
      label: "Vegitables",
      component: Vegitables,
    },
    {
      label: "Fish",
      component: Fish,
    },
    {
      label: "Meat",
      component: Meat,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const ActiveComponent = tabs.find((tab) => tab.label === activeTab).component;

  return (
    <div className="py-[10px] flex flex-col gap-[10px] lg:gap-[25px]">
      <div className="flex flex-col gap-[10px] lg:gap-0 items-center text-center">
        <h className="font-mont font-bold xsmall:text-[28px] mob:text-[35px] lg:text-[60px]">Featured Product</h>
        <span className="font-poppins  xsmall:text-[12px] mob:text-[14px] sm:text-[16px]">
          We only work with the most celebrated artisans and sustainable,
          independent businesses. All in one curated marketplace.
        </span>
      </div>
      <div className="hidden lg:flex gap-[3px] justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={classNames(
              "px-4 py-2 font-mont font-semibold text-sm  ",
              activeTab === tab.label
                ? "bg-[#edeae5] rounded-sm duration-500"
                : "hover:bg-gray-200 duration-500 rounded-sm text-gray-600"
            )}
            onClick={() => handleClick(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="px-4 bg-white  shadow-lg">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default Featured;
