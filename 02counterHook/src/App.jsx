import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setcounter] = useState(false)


  // exciseses no 1


  const addValue = ()=>{

    if (counter < 25 ) {
      counter = counter + 1
      setcounter(counter)
      
    }else{
      setcounter(25)
    }
  }

  const removeValue = () =>{
    if (counter > 0) {
      counter = counter - 1
      setcounter(counter)
    }else{
      setcounter(0)
    }
  }
  return (
    <>
      <h1>
      Chai aue React Project 2
      </h1>

      <h2>
        Count value : {counter}
      </h2>

      <div>
        <button onClick={addValue}>
          Increase Value
        </button>
        <br />
        <button onClick={removeValue}>
          Decrease Value
        </button>
      </div>
    </>
  );
}

export default App;
