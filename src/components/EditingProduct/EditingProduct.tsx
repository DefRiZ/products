import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditingProduct: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [description, setDiscription] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios
        .patch(`https://3813418464bdda33.mokky.dev/products/${id}`, {
          title,
          price,
          description,
        })
        .then((res) => {
          setTitle(res.data.title);
          console.log(res.data.title);
          navigate("/");
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
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
          ></textarea>
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
