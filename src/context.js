import React, { useState, useEffect, useContext } from "react";
import { urlRandomImg } from "./data";
const url = "https://api.github.com/users";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [randomImg, setRandomImg] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    };
    getUser();
  }, []);
  useEffect(() => {
    const getRandomImage = async () => {
      const response = await fetch(urlRandomImg);
      const data = await response.json();
      setRandomImg(data);
    };
    getRandomImage();
  }, []);
  return (
    <AppContext.Provider value={{ users, randomImg }}>
      {children}
    </AppContext.Provider>
  );
  //
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
