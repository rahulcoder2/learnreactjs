import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div
      className={`w-full h-screen duration-200 `}
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center py-2 bottom-12 inset-x-0">
        <div className=" flex flex-wrap px-2 py-3  gap-5 justify-center rounded-3xl shadow-lg  bg-white ">
          <button
            className="outline-none px-3 py-2 bg-red-600 rounded-full text-white shadow-sm "
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-3 py-2 bg-green-700 rounded-full text-white shadow-sm "
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-3 py-2 bg-blue-800 rounded-full text-white shadow-sm "
            onClick={() => {
              setColor("Blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-3 py-2  rounded-full text-white shadow-sm "
            style={{backgroundColor: 'olive'}}
            onClick={() => {
              setColor("olive");
            }}
          >
            Olive
          </button>
          <button
            className="outline-none px-3 py-2  rounded-full text-white shadow-sm "
            style={{backgroundColor: 'Gray'}}
            onClick={() => {
              setColor("gray");
            }}
          >
            gray
          </button>
          <button
            className="outline-none px-3 py-2  rounded-full text-black shadow-sm "
            style={{backgroundColor: 'yellow'}}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-3 py-2  rounded-full text-black shadow-sm "
            style={{backgroundColor: 'pink'}}
            onClick={() => {
              setColor("pink");
            }}
          >
            pink
          </button>
          <button
            className="outline-none px-3 py-2  rounded-full text-white shadow-sm "
            style={{backgroundColor: 'purple'}}
            onClick={() => {
              setColor("purple");
            }}
          >
            purple
          </button>
          <button
            className="outline-none px-3 py-2  rounded-full text-black shadow-sm "
            style={{backgroundColor: 'lavender'}}
            onClick={() => {
              setColor("lavender");
            }}
          >
            lavender
          </button>
          <button
            className="outline-none px-3 py-2  rounded-full text-black shadow-sm "
            style={{backgroundColor: 'white'}}
            onClick={() => {
              setColor("white");
            }}
          >
            white
          </button>
          <button
            className="outline-none px-3 py-2  rounded-full text-white shadow-sm "
            style={{backgroundColor: 'Black'}}
            onClick={() => {
              setColor("Black");
            }}
          >
            Black
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
