import React from "react";
import { Link } from "react-router-dom";

const CountryCrad = ({ name, flag, capital, population }) => {
  const alternateImage= "https://i.pinimg.com/originals/52/c6/65/52c665df0515dd447eb92544374cf543.jpg"
  return (
    <div>
        <Link to={`/${name}`}>
      <div className="border border-black w-[300px] h-[340px]  rounded-xl bg-gray-100 shadow-xl hover:scale-105 cursor-pointer transition ease-in-out delay-50 hover:shadow-green-500">{

        <img
        className=" w-auto p-2 m-auto  rounded-2xl   h-[200px]"
        src={flag ? flag:alternateImage}
        />
      }
        <h1 className="mx-6 my-1">
          Country Name:<span className="font-bold">{name}</span>
        </h1>
        <h2 className="font-semibold mx-6">Population:{population}</h2>
        <h2 className="font-semibold mx-6">Capital:{capital}</h2>
      </div>

</Link>
  </div>
  );
};

export default CountryCrad;
