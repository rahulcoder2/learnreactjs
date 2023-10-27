import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(false);

  // Interview Question

  // 1. ok javascript knowledge now  make a counter which increment when i click one click and decrement which i click on click . now  interviewer will add code in line 18 and 19 so on linke setcounter (counter + 1). and will asked qn what will be value to code when i will click btn

  // => (note: answer will be 1 if you are starting with 0 increment and so on) why because problem is not in  setcounter but in usestate  because usestate will send code in (fully on single batch) which mean we are update same counter more than 1 time in UI or variable.

  const addValue = () => {
    if (counter < 25) {
      setcounter(counter + 1);
      // setcounter(counter + 1);
      // setcounter(counter + 1);

      setcounter(prevCounter  => prevCounter + 1)
      setcounter(prevCounter  => prevCounter + 1)

    } else {
      setcounter(25);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setcounter(counter);
    } else {
      setcounter(0);
    }
  };
  return (
    <>
      <h1>Chai aue React Project 2</h1>

      <h2>Count value : {counter}</h2>

      <div>
        <button onClick={addValue}>Increase Value</button>
        <br />
        <button onClick={removeValue}>Decrease Value</button>
      </div>
    </>
  );
}

export default App;
