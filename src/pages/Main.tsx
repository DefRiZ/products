import axios from "axios";

import React from "react";
// import { Product, ProductItemList } from "./components/ProductItemList";
import { Title } from "../components/Title";
import { ProductList } from "../components/ProductList";
import { ButtonCount } from "../components/ButtonCount";

function Main() {
  const [products, setProducts] = React.useState([]);
  const [count, setCount] = React.useState(8);

  React.useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, [count]);
  return (
    <div>
      <Title text="Products text project" sizes={"2xl"} />
      <ProductList products={products} />
      <div>
        <ButtonCount text={"8 Products"} count={8} setCount={setCount} />
        <ButtonCount text={"16 Products"} count={16} setCount={setCount} />
        <ButtonCount text={"All Products"} count={20} setCount={setCount} />
      </div>
    </div>
  );
}

export default Main;
