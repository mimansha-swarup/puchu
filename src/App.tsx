import React from "react";
import "./App.css";
import { Navbar, SideBar } from "./Components";
import { AllRoutes } from "./Routes/AllRoutes";

function App()  {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <AllRoutes />
    </div>
  );
}

export default App;
