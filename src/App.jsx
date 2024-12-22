import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import data from "./components/accordion/data";

function App() {
  console.log(data);

  return (
    <>
      <Accordion data={data} />
    </>
  );
}

export default App;
