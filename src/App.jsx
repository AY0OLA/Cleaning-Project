import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Links from "./Component/Links/Links";
import Body from "./Component/Body/Body";
import Mains from "./Component/Mains/Mains";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Links />
      <Body />
      <Mains />
      <Footer />
    </>
  );
}

export default App;
