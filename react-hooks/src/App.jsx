import React, { useContext } from "react";
import { ThemeContext } from "./component/UseContext/ThemeContext";
import ColorPicker from "./component/ColorPicker/ColorPicker";

const App = () => {
  const { theme, setTheme, count, setCount } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div className="m-4">
      <h1 className="text-green-500 font-bold text-[30px] ">ReactJS Hooks</h1>
      <div className="counts">
        <h1 className="font-bold text-[30px]">Use State Example</h1>
        <h2 className="font-bold text-[30px]">{count}</h2>
        <button
          className="bg-green-700 text-white p-2"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          className="bg-green-700 text-white p-2 ml-2"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
      <div className="contex">
        <h1 className="font-bold text-[30px]">Use Context Example</h1>

        <button
          className="bg-green-700 text-white p-2 m-2"
          onClick={() => {
            setTheme(theme == "light" ? "dark" : "light");
          }}
        >
          Toggle Theme (Current: {theme})
        </button>
      </div>
      <ColorPicker/>
    </div>
  );
};

export default App;
