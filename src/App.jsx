import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataFeed from "./components/ui/DataFeed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="px-2">
        <button>click me</button>
        <DataFeed />
      </div>
    </>
  );
}

export default App;
