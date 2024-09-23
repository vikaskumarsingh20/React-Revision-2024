/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function AuthPage() {
  // State to toggle between Signup and Login forms
  const [isLogin, setIsLogin] = useState(false);

  // Function to toggle between forms
  const handleToggle = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full relative">
        {/* Toggle Button to switch between Signup and Login */}
        <button
          className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleToggle}
        >
          {isLogin ? "Go to Signup" : "Login"}
        </button>

        {/* Signup Form */}
        {!isLogin && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center"></h2>
            <Signup />
          </div>
        )}

        {/* Login Form */}
        {isLogin && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center"> </h2>
            <Login />
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
