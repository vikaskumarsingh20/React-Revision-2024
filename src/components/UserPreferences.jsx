// src/components/UserPreferences.js

import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserPreferences = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className=" text-4xl font-bold mb-2">Current Theme: {theme}</h1>
      <div className="flex space-x-4 bg-black text-white p-6 rounded-lg shadow-md ">
        <button onClick={() => setTheme("light")}  className="m-3">Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
      </div>
    </div>
  );
};

export default UserPreferences;
