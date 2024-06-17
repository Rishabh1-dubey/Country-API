import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border border-red-200  pt-6 h-[100] flex justify-between shadow-xl">
      <h1 className="font-bold text-2xl ml-4">
        {" "}
        Explore the world on the behalf of travelling{" "}
      </h1>
      <div className="flex items-center pb-5 ">
        <ul className="flex">
          <li className="m-2 px-8 hover:text-blue-700 hover:hover:transition duration-300 hover:cursor-pointer ">
          <Link to="/"> Home</Link>
          </li>
          <li className="m-2 px-8 hover:text-blue-700 hover:hover:transition duration-300 hover:cursor-pointer">
          <Link to="/about"> About</Link>
          </li>
          <li className="m-2 px-8  hover:text-blue-700 hover:hover:transition duration-300 hover:cursor-pointer">
           <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </div>
      <p className="mr-6 my-4 font-semibold text-slg">🌙 dark mode</p>
    </div>
  );
};

export default Header;
