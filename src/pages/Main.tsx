import React from "react";
// import { Product, ProductItemList } from "./components/ProductItemList";
import { Title } from "../components/Title";
import { ProductList } from "../components/ProductList";
import { ButtonCount } from "../components/ButtonCount";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function Main() {
  const context = React.useContext(ProductsContext);
  const { products, published, setCount, setPublished } = context!;
  const changePublished = () => {
    setPublished(!published);
  };
  return (
    <div>
      <div>
        <Link to="/create">Create</Link>
      </div>
      <div>
        <button onClick={changePublished}>
          {published ? "Show Unpublished" : "Show Published"}
        </button>
      </div>
      <div>
        <ButtonCount text={"8 Products"} count={8} setCount={setCount} />
        <ButtonCount text={"16 Products"} count={16} setCount={setCount} />
        <ButtonCount text={"All Products"} count={20} setCount={setCount} />
      </div>
      <Title text="Products text project" sizes={"2xl"} />
      <div></div>
      <ProductList products={products} />
    </div>
  );
}

export default Main;
