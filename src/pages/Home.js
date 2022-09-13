import React from "react";
import Menu from "../components/Menu";
import Navigation from "../components/Navigation";
import Post from "../components/Post";

import Suggestions from "../components/Suggestions";
import { useGlobalContext } from "../context";

const Home = () => {
  const { randomImg } = useGlobalContext();

  return (
    <>
      <Navigation />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-[960px] mx-auto ">
        <div className="col-span-2">
          <Menu />
          {randomImg.map((item, index) => {
            return (
              <div key={index}>
                <Post {...item} />
              </div>
            );
          })}
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
    </>
  );
};

export default Home;
