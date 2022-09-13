import React from "react";
import img from "../assets/images/download.jpg";
import { useGlobalContext } from "../context";
const Suggestions = () => {
  const { users } = useGlobalContext();
  return (
    <div>
      <div className="mt-10 w-[300px] h-[400px] overflow-hidden flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <img
              src={img}
              alt="name of img"
              className="w-[50px] h-[50px] rounded-full"
            />
            <p className="pl-4">john programmer</p>
          </div>
          <p className="text-sky-500">Switch</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 mb-2">Suggestions for you</p>
          <p>see all</p>
        </div>
        {users.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center w-[300px] h-[400px] pl-5">
              <div className="flex justify-between items-center gap-2">
                <img
                  src={item.avatar_url}
                  alt="name of img"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <p>{item.login}</p>
              </div>
              <div>
                <p>Follow</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-gray-400 mt-3">
        &copy;INSTAGRAM CLONE CREATE <br />
        BY M-amindev
      </p>
    </div>
  );
};

export default Suggestions;
