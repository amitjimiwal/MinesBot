// import React from 'react';
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  const { loggedIn } = useSelector((state) => state.user);
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        {!loggedIn ? <Login /> : <Logout />}
      </div>
    </>
  );
}

export default App;
