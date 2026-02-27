import { useState } from "react";
// import viteLogo from '/vite.svg'
import "./App.css";
import Journal from "./routes/Journal/Journal";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Journal />
    </>
  );
}

export default App;
