import React, { useEffect, useState } from "react";
import Stories from "./Stories";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useGlobalContext } from "../context";

const Menu = () => {
  const { users } = useGlobalContext();

  const scrollToRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 350;
  };
  const scrollToLeft = () => {
    var slider = document.getElementById("slider");

    slider.scrollLeft = slider.scrollLeft + 350;
  };
  return (
    <div className="max-w-[960px] w-full mt-10 bg-white   mx-auto rounded-xl md:w-[80%]">
      <div className="relative flex justify-center items-center group ">
        <IoIosArrowDropleftCircle
          size={25}
          onClick={scrollToRight}
          className="absolute  left-0 z-10 text-gray-300 cursor-pointer"
        />

        <div
          id="slider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative ">
          {users.map((user, index) => {
            return <Stories key={index} {...user} />;
          })}
        </div>

        <IoIosArrowDroprightCircle
          onClick={scrollToLeft}
          size={25}
          className="absolute  right-0  z-10 text-gray-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Menu;
