import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className=" text-3xl bg-green-500 p-5 rounded-full">
        Hello Tailwind i am testing you
      </h1>

      <Card 
      username='rahul'
      // btnText='click'
      />
      <Card 
      username='Manti'
      btnText='Mom'
      />
    </>
  );
}

export default App;
