import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import ToggleSwitch from "./ToggleSwitch";
import './App.css';
import { useState } from "react";


function App() {

  const [blue, setBlue] = useState<boolean>(false);
  const [red, setRed] = useState<boolean>(false);
  const [green, setGreen] = useState<boolean>(false);
  const [yellow, setYellow] = useState<boolean>(false);

  const handleToggle = () => {
    setBlue(!blue);
    setRed(!red);
    setGreen(!green);
    setYellow(!yellow);
  };

  return (
    <div>
      <ToggleSwitch handleToggle={handleToggle} />
      <Box1 color={blue ? "blue" : "white"} />
      <Box2 color={red ? "red" : "white"} />
      <Box3 color={green ? "green" : "white"} />
      <Box4 color={yellow ? "yellow" : "white"} />
    </div>
  );
}

export default App;
