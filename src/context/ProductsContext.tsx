import axios from "axios";
import React from "react";
import { Product } from "../components/ProductItemList";

interface ProductsContextProps {
  products: Product[];
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  addProduct: (newProduct: Product) => void;
}

export const ProductsContext = React.createContext<
  ProductsContextProps | undefined
>(undefined);

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [count, setCount] = React.useState<number>(8);

  const addProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const fetchProducts = async () => {
    axios
      .get(`https://3813418464bdda33.mokky.dev/products?limit=${count}`)
      .then((res) => {
        console.log(res.data.items);
        setProducts(res.data.items);
      });
  };

  React.useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <ProductsContext.Provider value={{ products, count, setCount, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
