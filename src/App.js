import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path={"/checkout"}
          element={
            <>
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path={"/"}
          element={
            <>
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
