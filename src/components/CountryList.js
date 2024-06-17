import React, { useEffect, useState } from "react";
import CountryCrad from "./CountryCrad";
import CountryData from "./CountryData";
import Shimmer from "./Shimmer";

const CountryList = ({ query }) => {
  const [CountryData, setCountriesData] = useState([]);
  // console.log(CountryData);

  useEffect(() => {
    // fetchmenu()
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  const image = (
    <img
      className=" ml-64 pt-30 h-[500px] "
      src="https://adifferentme.blog/wp-content/uploads/2019/11/kiara-advani-kabir-singh.jpg"
    ></img>
  );
  const filterCountries = CountryData.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );
  // console.log(filterCountries);

  //fetch our API -------------

  // const fetchmenu=async()=>{
  //   const data= await fetch('https://restcountries.com/v3.1/all')
  //   const json=data.json()
  //   console.log(json);
  // }
  setTimeout(()=>{
    
  })
if(CountryData.length===0){
  return <Shimmer/>
}
  return filterCountries.length === 0 ? (
    image
  ) : (
    <div className="flex flex-wrap pt-14 m-2 gap-10 mx-16">
      {filterCountries.map((country, i) => {
        return (
          <CountryCrad
            key={i}
            name={country.name.common}
            flag={country.coatOfArms?.svg}
            capital={country.capital}
            population={country.population}
          />
        );
      })}
    </div>
  );
};

export default CountryList;
