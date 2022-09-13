import React from "react";
import img from "../assets/images/download.jpg";

const PostAvatar = () => {
  return (
    <div className="w-14 h-14 inline-block m-2 border-2 border-red-500 rounded-full">
      <img
        src={img}
        alt="avatar"
        className=" w-full h-full rounded-full block p-[2px]"
      />
    </div>
  );
};

export default PostAvatar;
