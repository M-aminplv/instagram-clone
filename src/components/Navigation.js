import React, { useState } from "react";
import img from "../assets/images/737566.png";
import { FiSearch } from "react-icons/fi";
import { AiFillHome, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosSend, IoIosArrowDown } from "react-icons/io";

import { RiUserFollowLine } from "react-icons/ri";
import image from "../assets/images/download.jpg";

import { TbSquarePlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [show, setShow] = useState(false);

  // body.addEventListener("click", () => {
  //   setShow(false);
  // });
  return (
    <div className=" w-full  py-4 bg-white">
      <div className="flex justify-around items-center  max-w-[960px] mx-auto ">
        <div className=" flex items-center relative z-10">
          <Link to="/" className="w-25 h-7">
            <img
              src={img}
              alt="instagram"
              className="w-full h-full object-fit"
            />
          </Link>
          <IoIosArrowDown
            className="cursor-pointer "
            onClick={() => setShow(!show)}
          />
          <div
            className={
              show
                ? "absolute top-6 left-0 bg-white p-3 rounded-md z-10"
                : "hidden"
            }>
            <p className="flex gap-2 items-center">
              <RiUserFollowLine />
              <span>Following</span>
            </p>
            <p className="flex gap-2 items-center">
              <AiOutlineStar />
              <span>Favorites</span>
            </p>
          </div>
        </div>
        <div className="hidden sm:flex ">
          <div className="  flex justify-center items-center bg-gray-50 rounded-md p-1">
            <FiSearch size={20} className="m-1 text-xs" />
            <input
              type="text"
              placeholder="Search"
              className="pl-4 p-1 focus:outline-none bg-gray-50 rounded-full text-xl"
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-4">
          <Link to="/">
            <AiFillHome size={25} className="ml-2 cursor-pointer" />
          </Link>
          <Link to="/direct">
            <IoIosSend size={25} className="ml-2 cursor-pointer" />
          </Link>
          <TbSquarePlus size={25} className="ml-2 cursor-pointer" />
          <Link to="/explore">
            <FiSearch size={25} className="ml-2 cursor-pointer" />
          </Link>
          <AiOutlineHeart size={25} className="ml-2 cursor-pointer" />
          <div className="border-2 border-[#f39f50] w-10 h-10 rounded-full ml-5 ">
            <img
              src={image}
              alt="avatar"
              className="w-full h-full object-cover rounded-full p-[1px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
