import React from "react";
import "./App.css";
import Store from "./components/Store";

import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
};

export default App;
