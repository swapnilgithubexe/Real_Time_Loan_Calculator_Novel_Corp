import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}></Route>
        <Route path="*" element />
      </Routes>
    </Router>
  );
}

export default App;
