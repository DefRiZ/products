import axios from "axios";
import React from "react";
import { Product } from "../components/ProductItemList";

interface ProductsContextProps {
  products: Product[];
  count: number;
  published: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  addProduct: (newProduct: Product) => void;
  setPublished: React.Dispatch<React.SetStateAction<boolean>>;
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

  const [published, setPublished] = React.useState<boolean>(() => {
    const storedValue = localStorage.getItem("published");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  const addProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const fetchProducts = async () => {
    axios
      .get(
        `https://3813418464bdda33.mokky.dev/products?limit=${count}&published=${published}`
      )
      .then((res) => {
        console.log(res.data.items);
        setProducts(res.data.items);
      });
  };

  React.useEffect(() => {
    fetchProducts();
    localStorage.setItem("published", JSON.stringify(published));
  }, [count, published]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        published,
        count,
        setCount,
        addProduct,
        setPublished,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
