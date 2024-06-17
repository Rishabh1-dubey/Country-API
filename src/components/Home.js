import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import CountryList from "./CountryList";
import Footer from "./Footer";
import LoginIN from "./LoginIN";

const Home = () => {
  const [isLoading, setisLoading] = useState(true);
  
  const [query, setQurey] = useState("");
  return (
    <div>
      <main className="bg-black">
        <SearchBar setQurey={setQurey} />
        <LoginIN />

        <CountryList query={query} />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
