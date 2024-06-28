import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="px-16 py-8">
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default App;
