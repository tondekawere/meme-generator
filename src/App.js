import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";



function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <MemeGenerator />
    </>
  );
}

export default App;
