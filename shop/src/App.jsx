import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChangeText = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => setProducts(prod));
  }, []);

  return (
    <div>
      <header>
        <h1>Shop</h1>
        <p>test: {searchText}</p>
        <SearchBar onChangeText={handleChangeText} />
      </header>
      <main>
        {products
          .filter((prod) => prod.title.includes(searchText))
          .map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
      </main>
    </div>
  );
}

export default App;
