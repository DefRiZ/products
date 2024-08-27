import React from "react";
import { SingleProd } from "../components/SingleProd";
import { Product } from "../components/ProductItemList";

export const SingleProdPage: React.FC<Product> = () => {
  return (
    <div>
      <SingleProd />
    </div>
  );
};
