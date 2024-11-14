import Products from "./components/Products";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "telefon",
      price: 10,
    },
    {
      id: 2,
      title: "komputer",
      price: 15,
    },
    {
      id: 3,
      title: "planset",
      price: 20,
    },
  ]);

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basketArr")) || []
  );

  const temizle = () => {
    setBasket([]);
  };

  return (
    <div>
      <Products products={products} basket={basket} setBasket={setBasket} />
      <hr />
      <Basket basket={basket} setBasket={setBasket} />
      <button onClick={temizle}>Temizle</button>
    </div>
  );
}

export default App;
