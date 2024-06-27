import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="px-16 py-8">
      <Navbar />
      <Content>Hi</Content>
    </div>
  );
}

export default App;
