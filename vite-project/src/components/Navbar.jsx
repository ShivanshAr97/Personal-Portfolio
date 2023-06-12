import { ThemeContext } from '../context/ThemeContext'
import React, {useContext} from "react";

const Navbar = () => {
//   const mode = "light";
  const { mode, changeMode } = useContext(ThemeContext);
  return (
    <div className="shadow-md px-6 py-4 flex justify-between items-center sticky top-0 right-0 bg-white z-50">
      <h1 className="text-red-600 font-bold text-3xl">Shivansh Arora</h1>
      <div className="">
        <ul className="flex text-lg">
          <li className="px-4">Home</li>
          <li className="px-4">About</li>
          <li className="px-4">Skills</li>
          <li className="px-4">Projects</li>
          <li className="px-4">Achievements</li>
          <li className="px-4">Contact</li>
        </ul>
      </div>
      <div
        className="flex transition-all duration-500 border w-14 rounded-xl px-0.5 justify-between relative"
        onClick={changeMode}
      >
        <div className="dark">🌚</div>
        <div className="light">🌝</div>
        <div
          className="bg-red-800 rounded-full w-6 h-6 absolute ballPlace"
          style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
