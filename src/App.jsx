import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import { Route, Routes } from "react-router-dom";
import RandomColor from "./components/randomcolors/RandomColor";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      <RandomColor />
      <Routes>
        <Route path="/" component={Accordion} />
        <Route path="/randomcolors" component={RandomColor} />
      </Routes>
    </>
  );
}

export default App;
