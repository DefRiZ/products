import React from "react";
import Main from "./pages/Main";
import { SingleProdPage } from "./pages/SingleProdPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<SingleProdPage />} />
      </Routes>
    </Router>
  );
}

export default App;
