import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFeed from "./components/ui/DataFeed";
import Header from "./components/Header/Header";
import Login from "./components/Header/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="px-2">
        <button>click me</button>
        <Header />
        <Login />
        <Register />
        <DataFeed />
      </div>
    </>
  );
}

export default App;
