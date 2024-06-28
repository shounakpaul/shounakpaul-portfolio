import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="px-6 py-3 md:px-16 md:py-8">
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default App;
