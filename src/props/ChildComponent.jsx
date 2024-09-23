/* eslint-disable no-unused-vars */
import React from "react";


// 1. Basic Props Passing (From Parent to Child)
// function ChildComponent({message}) {
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>{message}</p>
//     </div>
//   );
// }

// 2. Passing Functions as Props
function ChildComponent({message,count}){
  <div>
    <h1>ChildComponent</h1>
    <p>{message}</p>
    <p>{count}</p>
    {count > 0 && <p>count:{count}</p> }
  </div>
}

export default ChildComponent;