import React from "react";
import { motion } from "framer-motion";
import img2 from "../../assets/Index/image2.jpg";
import { Link } from "react-router-dom";

function Index() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative h-screen">
      <motion.img
        src={img2}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.div
        className="flex justify-center "
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-1/3 ">
          <h1 className="text-5xl lg:text-5xl text-center font-mont font-bold mb-4 text-white">
            Welcome to <span className="text-[#22c55e]">Grocerz Store</span>
          </h1>
          <motion.div
            className="flex flex-col gap-[10px] px-[10px] font-poppins"
            variants={textVariants}
          >
            <motion.select
              className="px-4 py-2 rounded-md bg-white shadow-md outline-none"
              variants={textVariants}
            >
              <option value="" disabled selected>
                Select district
              </option>
              <option value="district1">District 1</option>
              <option value="district2">District 2</option>
              <option value="district3">District 3</option>
            </motion.select>
            <motion.select
              className="px-4 py-2 rounded-md bg-white shadow-md outline-none"
              variants={textVariants}
            >
              <option value="" disabled selected>
                Select location
              </option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </motion.select>
            <motion.div
              whileHover="hover"
              variants={buttonVariants}
              
            >
              <Link className="font-mont font-bold px-6 py-2 bg-[#dd292f] flex justify-center text-white rounded-md shadow-md" to="/home">Let me in</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Index;
