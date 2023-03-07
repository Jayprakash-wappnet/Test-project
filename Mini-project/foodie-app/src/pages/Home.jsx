import React from "react";
import SearchBar from "../utils/SearchBar";
import FoodMenu from "../components/FoodMenu";

function Home() {
  return (
    <div>
      <SearchBar />
      <FoodMenu />
    </div>
  );
}

export default Home;
