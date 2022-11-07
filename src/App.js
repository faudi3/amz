import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={"/checkout"}
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path={"/login"}
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route
          path={"/"}
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
