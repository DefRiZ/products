import React from "react";
import { Product, ProductItemList } from "../ProductItemList";
import styles from "./ProductList.module.scss";

interface Props {
  products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <ul className={styles.list}>
        {products.map((product: Product) => (
          <ProductItemList key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};
