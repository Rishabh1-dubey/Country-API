import React, { useState } from "react";
import Header from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";
import CountryList from "./src/components/CountryList";
import Footer from "./src/components/Footer";

const App = () => {

  const [query, setQurey] = useState("");
  return (
    <div>
      <Header />
      <SearchBar setQurey={setQurey}/>
      <>
      <CountryList query={query}/>
      </>
      <>
      <Footer/>
      </>
    </div>
  );
};

export default App;
