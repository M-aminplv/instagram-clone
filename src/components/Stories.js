import React from "react";
import { Link } from "react-router-dom";

const Stories = (user) => {
  const lengthText = (str, num) => {
    let length = str.substring(0, num);
    return (length += "...");
  };

  return (
    <div className="inline-block">
      <div className="w-14 h-14  m-2 border-2 border-red-500 rounded-full cursor-pointer">
        <Link to="/story">
          <img
            src={user.avatar_url}
            alt="avatar"
            className=" w-full h-full rounded-full block p-[2px]"
          />
        </Link>
        <p
          className="text-black text-sm text-center
        ">
          {lengthText(user.login, 6)}
        </p>
      </div>
    </div>
  );
};

export default Stories;
