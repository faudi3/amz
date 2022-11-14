import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Store/StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("the user is", authUser);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
