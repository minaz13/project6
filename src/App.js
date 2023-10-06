import React from "react";
import { Emp } from "./components/Emp";
import "./components/common.css"
import { MyEmp } from "./components/MyEmp";
import { Registration } from "./components/Registration";
import { Item } from "./components/Item";
import { Colors } from "./components/Colors";
import { Signin } from "./components/Signin";
import { Outline } from "./components/Outline";
import { Login } from "./components/Login";

function App() {
  return (
   <div className="main">
      {/* {/* <Emp /> 
       <MyEmp /> 
       <Registration /> 
       <Colors/> */}
      {/* <Item />  */}
      {/* <Signin /> */}
      {/* <Outline/> */}
      <Login/>
   </div>
  );
}

export default App;
