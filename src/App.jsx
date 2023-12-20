import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Gameplay from "./components/Gameplay";

function App() {
  const [isStarted, setIsStarted] = useState(true);
  return (
    <div className="container">
      {isStarted ? <Gameplay /> : <Home setIsStarted={setIsStarted} />}
    </div>
  );
}

export default App;
