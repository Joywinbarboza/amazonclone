import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";


function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={[<Checkout />]} />
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


