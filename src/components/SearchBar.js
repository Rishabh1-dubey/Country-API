import React from "react";

import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div className="pt-9 flex   justify-between">
        <div className=" rounded-lg  px-5 mx-40 flex py-2 w-80 shadow-lg">
        <FaSearch className="mr-2 mt-4 text-2xl" />
      <input
        className=" my-2 p-2  "
        type="search"
        placeholder="enter your country"
        />
        </div>
      <select className="mr-20 m2 shadow-lg px-2" >
        <option value="">Search by filter</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default SearchBar;
