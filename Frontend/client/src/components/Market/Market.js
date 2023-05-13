import React, { useState, useEffect } from "react";
import Market1 from "../../assets/Home/market1.jpg";
import Market2 from "../../assets/Home/market2.jpg";
import Market3 from "../../assets/Home/market4.jpg";
import Market4 from "../../assets/Home/market5.jpeg";
import Market5 from "../../assets/Home/market6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Market() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([Market1, Market2]);
  console.log(setImageUrls);

  //slider

  const SampleNextArrow = (props) => {
    return (
      <div
        className="bg-[white] text-[35px] py-[10px] px-[10px] cursor-pointer absolute right-5 top-1/3 lg:top-1/2 z-[999]"
        onClick={props.onClick}
      >
        <GrFormNext />
      </div>
    );
  };

  function SamplePrevArrow(props) {
    return (
      <div
        className="bg-[white] text-[35px] py-[10px] cursor-pointer px-[10px] absolute left-6 top-1/3 lg:top-1/2 z-[999]"
        onClick={props.onClick}
      >
        <GrFormPrevious />
      </div>
    );
  }
  const arrow = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      image: Market3,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market4,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market5,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market3,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market4,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
    {
      image: Market5,
      title: "Green Fluffy Leopard Print Cardigan",
      companyname: "by Sugar Style",
      price: "$44.00",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, imageUrls.length]);

  return (
    <div className="py-[10px] flex flex-col gap-[25px]">
      <div className="flex flex-col items-center">
        <h className="font-mont font-bold xsmall:text-[28px] mob:text-[35px] lg:text-[60px]">Markets</h>
        <span className="font-poppins text-center xsmall:text-[12px] mob:text-[14px] sm:text-[16px]">
          From the vibrant stalls of Borough Market to the bustling boutiques of
          Camden Market, uncover one-of-a-kind treasures from world-renowned
          market traders and artisans.
        </span>
      </div>
      <div className=" lg:px-[60px] flex flex-col lg:flex-row ">
        <div className="px-[10px] lg:px-0 w-full lg:w-[35vw] pb-10 pt-[10px] ">
          <img
            key={currentImageIndex}
            src={imageUrls[currentImageIndex]}
            alt={`Banner ${currentImageIndex}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pb-10 pt-[10px] ">
          <Slider {...settings} {...arrow} className=" h-full lg:w-[58vw] ">
            {data.map((item, index) => (
              <div key={index} className=" flex flex-col h-full  ">
                <img src={item.image} alt={item.title} className="pb-[5px]" />
                <div className="flex flex-col gap-[3px] text-[14px] md:text-[16px]">
                  <h3 className="font-poppins">{item.title}</h3>
                  <p className="font-open">{item.companyname}</p>
                  <p className="font-mont font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Market;
