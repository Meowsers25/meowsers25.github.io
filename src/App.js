import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News"
import Recent from "./components/Recent"
import Board from "./components/Board";
// import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/recent" element={<Recent />}/>
        <Route path="/bod" element={<Board />}/>
      </Routes>
      {/* <Hero />
      <News />
      <Recent />
      <Board /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
