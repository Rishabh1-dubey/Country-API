import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountryData from "./CountryData";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get('name')
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);

  const [errorPage, seterrorPage] = useState(false);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(', '),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', '),
          borders: []
        })

        if(!data.borders) {
          data.borders = []
        }

        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
        })).then((borders) => {
          setCountryData((prevState) => ({...prevState, borders }))
        })
      })
      .catch((err) => {
        console.log(err);
        seterrorPage(true)
      })
  }, [countryName])

  if (errorPage) return <div>serach for another countries</div>;

  return countryData === null ? (
    "loading..."
  ) : (
    <main>
      <div className="  w-6/12 m-auto">
        <div className=" w-full">
          <img
            className=" h-60 w-64"
            src={countryData.flag}
            alt={`${countryData.name} flag`}
          />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(", ")}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="flex w-full">
              <b>Border Countries: </b>&nbsp;
              <div className=" flex gap-1">
                  {countryData.borders.map((border) => (
                    <Link to={`/${border}`}>{border}</Link>
                  ))}
               
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
