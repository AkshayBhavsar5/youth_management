import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
<<<<<<< HEAD

import DataFeed from "./components/ui/DataFeed";
import Header from "./components/Header/Header";
// <<<<<<< HEAD
import Login from "./components/Login/Login";
// =======
import Login from "./components/Header/Login/Login";
// >>>>>>> 5097b31e411111d4a50d34fd7674aecc10712b37
=======
import DataFeed from "./components/DataFeed/DataFeed";
import Header from "./components/Header/Header";
>>>>>>> ba29ef1da606cdb38f549e9ea8014d0a49cb195c
import Register from "./components/Register/Register";

// import Chat from "./components/Chat/Chat"

function App() {

  return (
    <>
<<<<<<< HEAD
      <div className="px-2">
        <button>click me</button>
        {/* <<<<<<< HEAD */}
        <Header />
        <Login />
        <Register />
        =======
        <Header />
        <Login />
        <Register />
        {/* >>>>>>> 5097b31e411111d4a50d34fd7674aecc10712b37 */}
        <DataFeed />
      </div>
=======
      {/* <div className="">
        <Header/>
        <Register/>
        {/* <Chat/> */}
      {/* </div> */}
>>>>>>> ba29ef1da606cdb38f549e9ea8014d0a49cb195c
    </>
  );
}

export default App;
