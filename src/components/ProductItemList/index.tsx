import React from "react";
import styles from "./ProductItemList.module.scss";
import { Link } from "react-router-dom";

export interface Product {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: { rate: number; count: number };
  createdAt?: string;
  published?: boolean;
}

export const ProductItemList: React.FC<Product> = ({
  id,
  image,
  title,
  price,
}) => {
  return (
    <li>
      <img src={image} alt="product" className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <Link to={`/products/${id}`}>View Details</Link>
    </li>
  );
};
