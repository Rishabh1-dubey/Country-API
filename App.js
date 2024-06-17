import React, { useState } from "react";
import Header from "./src/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./src/components/Footer";

const App = () => {

  return (
    <div>
      <Header />
      <Outlet />
   
    </div>
  );
};

export default App;
