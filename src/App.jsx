import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import "./Reset.css";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="pokemonApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<Detail />} />
          {/* <Route path='/detail/:id' element={<Detail/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
