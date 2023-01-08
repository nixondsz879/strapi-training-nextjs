import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../pages/_app";

const Input = () => {
  const [value, setValue] = useState("");
  const appContext = useContext(AppContext);

  console.log(appContext, "appContextFromInput");

  useEffect(() => {
    // The component mounted
    console.log("ComponentMounted", value);
  }, []);

  useEffect(() => {
    // Everytime the vlaue changes, this useeffect function fires
    console.log("StateUpdates", value);
  }, [value]);

  return <input onChange={(e) => setValue(e.target.value)} />;
};

export default Input;
