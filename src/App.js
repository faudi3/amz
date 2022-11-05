import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={"/checkout"}
          element={
            <>
              <Header />
              <h1>hi</h1>
            </>
          }
        ></Route>
        <Route
          path={"/"}
          element={
            <>
              <Header /> <Home />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
