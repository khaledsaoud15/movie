import React from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";

const Home = ({ favorites, setFovrites }) => {
  return (
    <div>
      <Header />
      <Movies favorites={favorites} setFovrites={setFovrites} />
    </div>
  );
};

export default Home;
