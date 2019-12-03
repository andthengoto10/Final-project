import React from "react";
import "./App.css";
import Logo from "./assest/Image/logo.png";

import Content from "./Components/Content/Content";

function App() {
  return (
    <div>
      <img src={Logo} alt="logo" className="logo" />
      <Content />
    </div>
  );
}

export default App;
