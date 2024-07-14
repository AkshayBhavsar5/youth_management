import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import DataFeed from "./components/ui/DataFeed";
import Header from "./components/Header/Header";
// <<<<<<< HEAD
import Login from "./components/Login/Login";
// =======
import Login from "./components/Header/Login/Login";
// >>>>>>> 5097b31e411111d4a50d34fd7674aecc10712b37
import Register from "./components/Register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
    </>
  );
}

export default App;
