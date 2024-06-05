import React from "react";
import CountryCrad from "./CountryCrad";
import CountryData from "./CountryData";
const CountryList = () => {
  console.log(CountryData);
  return (
    <div className="flex flex-wrap pt-14 m-2 gap-10 mx-16">
      {CountryData.map((country , i)=>(
       <CountryCrad
       key={i}
       name={country.name.common}
       flag={country.coatOfArms?.svg}
       capital={country.capital}
       population={country.population}
       /> 
      ))}
    </div>
  );
};

export default CountryList;
