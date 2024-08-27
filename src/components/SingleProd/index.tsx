import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "../ProductItemList";

export const SingleProd: React.FC<Product> = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<Product>();
  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <div>Loading</div>;
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};
