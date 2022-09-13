import React from "react";
import Navigation from "../components/Navigation";
import { FiSearch } from "react-icons/fi";

import ExploreImg from "../components/ExploreImg";

const Explore = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-[960px] w-auto my-5 flex flex-col mx-auto">
        <form className="flex justify-center items-center h-10 rounded-lg relative ">
          <FiSearch className="absolute left-1 top-[50%] translate-y-[-50%] text-gray-400" />
          <input
            type="text"
            className="w-full h-full bg-gray-200 rounded-lg pl-6 focus:outline-none sm:wi"
            placeholder="Search"
          />
        </form>
        <div className="mt-5  w-auto   ">
          <ExploreImg />;
        </div>
      </div>
    </div>
  );
};

export default Explore;
