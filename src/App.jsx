import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./scss/dist/App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PopularCategories from "./components/PopularCategories/PopularCategories";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PopularCategories />
    </div>
  );
}

export default App;
