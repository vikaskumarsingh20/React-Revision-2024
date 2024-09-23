 // eslint-disable-next-line no-unused-vars
 import React from "react";
import ChildComponent from "./ChildComponent";

// 1. Basic Props Passing (From Parent to Child)
// function ParentComponent() {
//   const message = "Hello from Parent!";
  
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <ChildComponent message={message} />
//     </div>
//   );
// }

// 2. Spread operator [...props] as Props

function ParentComponent() {
  const props = {
    message: "Hello from Parent!",
    count: 10,
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent {...props} />
    </div>
  );
}
export default ParentComponent;