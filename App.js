import React from "react";
import Header from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";
import CountryList from "./src/components/CountryList";

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <>
      <CountryList/>
      </>
    </div>
  );
};

export default App;
