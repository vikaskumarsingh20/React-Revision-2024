/* eslint-disable no-unused-vars */
import React from "react";
import Signup from "./components/Authentication/Signup";
import AuthPage from "./components/Authentication/AuthPage";
import UseSatate from "./hooks/UseSatate";
import UserPreferences from "./components/UserPreferences";
import ThemeToggle from "./components/ThemeToggles/ThemeToggle";
import { ThemeProvider } from "./components/ThemeToggles/ThemeContext";
import ParentComponent from "./props/ParentComponent";
import CookieBanner from "./components/CookiesBanner";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            StudyNotion
          </h1>
          <ThemeToggle />
          <AuthPage />
          <UseSatate />
          <ParentComponent />
        </div>

        <UserPreferences />
        <CookieBanner/>
      </div>
     
    </ThemeProvider>
    
  );
}

export default App;
