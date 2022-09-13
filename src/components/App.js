import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";

import Home from "../pages/Home";

import Story from "../pages/Story";
import Direct from "../pages/Direct";
import Explore from "../pages/Explore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/direct" element={<Direct />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
