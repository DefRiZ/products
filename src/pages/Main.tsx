import React from "react";
// import { Product, ProductItemList } from "./components/ProductItemList";
import { Title } from "../components/Title";
import { ProductList } from "../components/ProductList";
import { ButtonCount } from "../components/ButtonCount";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function Main() {
  const context = React.useContext(ProductsContext);
  const { products, setCount } = context!;
  return (
    <div>
      <div>
        <Link to="/create">Create</Link>
      </div>
      <div>
        <ButtonCount text={"8 Products"} count={8} setCount={setCount} />
        <ButtonCount text={"16 Products"} count={16} setCount={setCount} />
        <ButtonCount text={"All Products"} count={20} setCount={setCount} />
      </div>
      <Title text="Products text project" sizes={"2xl"} />
      <ProductList products={products} />
    </div>
  );
}

export default Main;
