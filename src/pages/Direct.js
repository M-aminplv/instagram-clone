import React from "react";
import Navigation from "../components/Navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { useGlobalContext } from "../context";
import { RiShareCircleFill } from "react-icons/ri";
const Direct = () => {
  const { users } = useGlobalContext();
  return (
    <div className="h-screen">
      <Navigation />
      <div className="grid grid-cols-3 max-w-[960px] h-[90%] border-2 border-zinc-400 mx-auto w-[90%] mt-3">
        <div className="grid col-span-1 border-2 border-l-0 border-t-0  border-zinc-400 h-full overflow-hidden">
          <header
            className="text-center border-b-2 border-zinc-400 h-20 flex justify-center items-center relative
          ">
            <div className="flex ">
              <h2>John programmer</h2>
              <IoIosArrowDown />
            </div>
            <FiEdit
              className="absolute right-2 top-[50%] translate-y-[-50%]"
              size={25}
            />
          </header>
          <ul className=" h-full overflow-y-scroll scrollbar-hide ">
            {users.map((item, index) => {
              return (
                <li className="flex gap-2 pl-3 mt-3 items-center" key={index}>
                  <img
                    src={item.avatar_url}
                    alt={item.login}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <p>{item.login}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" col-span-2 flex flex-col justify-center items-center gap-2">
          <RiShareCircleFill size={100} />
          <h2 className=" text-xl">Your Message</h2>
          <p>Send private photos and messages to a friend or group.</p>
          <button className="text-white bg-sky-500 rounded-md p-2">
            Sent Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Direct;
