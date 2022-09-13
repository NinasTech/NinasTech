import React from "react";
import Home from "./views/Home";
import AddHistory from "./views/AddHistory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowHistory from "./views/ShowHistory";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddHistory />} />
      <Route path="/show/:id" element={<ShowHistory />} />
    </Routes>
  </Router>
);
export default App;
