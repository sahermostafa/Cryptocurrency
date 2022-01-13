import React from "react";
import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes , Route  } from "react-router-dom";
import "./App.css";

function App(){  
  return (
    <div className="App">
      <Routes>
        <Route  path="/" exact element={ <Login/> } />
        <Route  path="/home" exact element={ <Home/> } />
        <Route path="*" element={ <NoMatch/> } />
      </Routes>
    </div>
  );
}
export default App;

