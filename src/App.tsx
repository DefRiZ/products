import React from "react";
import Main from "./pages/Main";
import { SingleProdPage } from "./pages/SingleProdPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import { Create } from "./pages/Create";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:id" element={<SingleProdPage />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
}

export default App;
