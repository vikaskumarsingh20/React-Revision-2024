/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function UseSatate() {
    const [count ,setCount ] = useState(0);

    
       const increamentHandler = () =>{
        setCount(count + 1);
       }

       return (
        <div className="p-4 justify-content-center">
          <p className="mb-4">count: {count}</p>
      
          {/* Text area with bg-black and text-white */}
          <span className="bg-black text-white p-4 rounded-md">
            {/* Button with line animation on hover */}
            <button
              onClick={increamentHandler}
              className="relative inline-block px-6 py-2 bg-white text-black font-semibold rounded-md transition-all duration-300 ease-in-out 
                         before:content-[''] before:absolute before:inset-0 before:border-b-2 before:border-black before:scale-x-0 before:origin-right before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 hover:before:origin-left"
            >
              Increment
            </button>
          </span>
        </div>
      );
      
}

export default UseSatate