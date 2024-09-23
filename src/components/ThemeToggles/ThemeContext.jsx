/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
 
import React, { createContext, useContext, useEffect, useState } from "react";

 
const ThemeContext = createContext();

 
export const useTheme = () => useContext(ThemeContext);

 
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}  
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
