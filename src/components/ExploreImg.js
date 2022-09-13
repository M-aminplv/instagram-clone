import React from "react";
import Masonry from "react-responsive-masonry";
import { useGlobalContext } from "../context";
const ExploreImg = () => {
  const { randomImg } = useGlobalContext();

  return (
    <Masonry columnsCount={3} gutter="10px">
      {randomImg.map((image, i) => (
        <img
          key={i}
          src={image.urls?.regular}
          style={{ width: "100%", display: "block" }}
        />
      ))}
    </Masonry>
  );
};

export default ExploreImg;
