import React from "react";
import axios from "axios";
import { ProductsContext } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";

type Props = {};

export const CreateProduct: React.FC<Props> = () => {
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [description, setDiscription] = React.useState<string>("");
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const [published, setPublished] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const context = React.useContext(ProductsContext);
  const { products, addProduct } = context!;
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !price || !description || !published) {
      setError("All fields except imageUrl are required");
      console.log(error);
      return;
    }

    const newProduct = {
      id: products.length + 1,
      image: imageUrl
        ? imageUrl
        : "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      name,
      price,
      description,
      published,
      createdAt: new Date().toISOString(),
    };

    try {
      axios
        .post("https://3813418464bdda33.mokky.dev/products", newProduct)
        .then((res) => {
          addProduct(res.data);
          console.log(res.data);
          navigate("/");
        });
    } catch (error: any) {
      throw new error(`Error: ${error}`);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
          />
        </div>
        <div>
          <label>Published:</label>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
