import React, { useState } from "react";
import PostAvatar from "./PostAvatar";
import { IoIosSend } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark, BsEmojiSmile, BsThreeDots } from "react-icons/bs";

const Post = (item) => {
  const [popup, setPopup] = useState(false);
  const [checkLike, setCheckLike] = useState(false);

  let time = 0;
  const like = () => {
    if (time === 0) {
      time = new Date().getTime();
    } else {
      if (new Date().getTime() - time < 800) {
        setCheckLike(!checkLike);
      } else {
        time = new Date().getTime();
      }
    }
  };

  return (
    <>
      <div className="max-w-[960px] w-[100%] bg-white mx-auto mt-10 rounded-md] md:w-[80%] ">
        <header className="flex justify-between items-center">
          <PostAvatar />
          <BsThreeDots
            size={25}
            className="mr-4 cursor-pointer"
            onClick={() => setPopup(!popup)}
          />
        </header>

        <div className="h-[600px]">
          <img
            className="w-full  object-cover h-[80%] block cursor-pointer"
            src={item.urls?.regular}
            alt="/ "
            onClick={() => like()}
          />
          <div className="flex justify-between mx-6 my-3 ">
            <div className="flex gap-5">
              {checkLike ? (
                <AiFillHeart
                  size={25}
                  className="text-red-500"
                  onClick={() => setCheckLike(!checkLike)}
                />
              ) : (
                <AiOutlineHeart
                  size={25}
                  onClick={() => setCheckLike(!checkLike)}
                />
              )}

              <FaRegComment size={25} />
              <IoIosSend size={25} />
            </div>
            <BsBookmark />
          </div>
          <p className="ml-6">Liked by ......</p>
          <div className="flex justify-between mx-5 items-center mt-2">
            <BsEmojiSmile size={20} />
            <form className="flex justify-between w-[95%]">
              <input
                type="text"
                placeholder="Add comment..."
                className=" bg-transparent text-xl focus:outline-none text-black placeholder:text-gray-500"
              />

              <button className="text-4 text-[#32a2a8] font-bold">Post</button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={
          popup
            ? "bg-black/60 w-screen h-screen fixed top-0 left-0 z-20  "
            : "none"
        }
        onClick={() => setPopup(!popup)}></div>

      {popup ? (
        <div
          className={
            popup
              ? "bg-white fixed top-[40%] left-[40%] mx-auto rounded-lg h-[300px]  w-[200px] z-30 sm:w-[300px] ease-in duration-300 "
              : "none"
          }>
          <ul className="flex flex-col justify-center items-center gap-2   bg-whith h-full w-full">
            <li className="w-full border-b-2 text-center mt-1 font-bold text-red-500 cursor-pointer">
              Report
            </li>
            <li className="w-full border-b-2 text-center mt-1 cursor-pointer">
              Unfollow
            </li>
            <li className="w-full border-b-2 text-center mt-1 cursor-pointer">
              Add to favorites
            </li>
            <li className="w-full border-b-2 text-center mt-1 cursor-pointer">
              Go to post
            </li>
            <li className="w-full border-b-2 text-center mt-1 cursor-pointer">
              Shate to...
            </li>
            <li className="w-full border-b-2 text-center mt-1 cursor-pointer">
              Copy link
            </li>
            <li className="w-full border-b-2 text-center mt-1 cursor-pointer">
              Embed
            </li>
            <li className="cursor-pointer" onClick={() => setPopup(false)}>
              {" "}
              Cancel
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Post;
