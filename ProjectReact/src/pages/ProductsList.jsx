import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Product from "../components/Product";

import NavBar from "../components/NavBar";

const ProductsList = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error.message}</p>} /
      <header className="header">
        <h1>Tienda Fake</h1>
        <div>
          <NavBar />
        </div>
      </header>
      {products.map((product) => (
        <Product />
      ))}
    </>
  );
};

export default ProductsList;
