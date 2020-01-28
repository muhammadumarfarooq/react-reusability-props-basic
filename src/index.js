import React from "react";
import ReactDOM from "react-dom";

import UserList from "./UserList";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div>
      <ApprovalCard>
        <UserList name='Umar' />
      </ApprovalCard>
      <ApprovalCard>
        <UserList name='Hassan' />
      </ApprovalCard>
      <ApprovalCard>
        <UserList name='Umair' />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

// How to create a reusable component:

// examine the JSX that is repeating.
// make a file and give it a meaningful name
/**
 So Far......
  How to generate a React js project 
  all files delete... and make new files in src
  first component ....
  Js inside {} brackets....
  Components ==> reuse, nest, configure
  Component Tenets
  reusability
  nesting 
  configuration 

  ====> We will make a simple application that will be used to understand all these concepts.
  First I follow the neive approach then i will make components of it.
  here we will use component nesting, Component Reuse and also configure the componet to show different data using props.
  

  When and How to make a component?
  see repeated JSX.
  think its name !!!very imp.
  make a new file and make a component and add the code.

 */

/*



*/
