import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*()_+=-{}[]?/><";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copytoclipbord = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,25);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full mx-auto max-w-md shadow-md my-8 p-2 bg-gray-700 text-orange-500">
        <h1 className="text-center font-bold text-3xl">Password Generator</h1>

        <div className="py-4 flex">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="password"
            className="w-full px-2 py-1 rounded-sm outline-none"
          />
          <button className="py-3 px-2  rounded-r-lg bg-blue-700 text-white font-bold"
          onClick={copytoclipbord}
          >
            copy
          </button>
        </div>

        <div className="flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center">
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />

            <label>Length: {length}</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              value={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              value={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label>character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
