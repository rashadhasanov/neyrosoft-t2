import React from "react";

function BasketCard({ data, basket, setBasket }) {
  let newBasket = [...basket];

  const plus = (id) => {
    const product = newBasket.find((el) => el.id === id);
    product.count += 1;
    localStorage.setItem("basketArr", JSON.stringify(newBasket));
    setBasket(newBasket);
  };

  const minus = (id) => {
    const product = newBasket.find((el) => el.id === id);
    product.count -= 1;
    localStorage.setItem("basketArr", JSON.stringify(newBasket));
    setBasket(newBasket);
  };

  return (
    <div>
      <p>Mehsul: {data?.title}</p>
      <p>Say: {data?.count}</p>
      <p>Price: {data?.count * data?.price}</p>
      <div>
        <button onClick={() => plus(data?.id)}>+</button>
        <span>{data?.count}</span>
        <button onClick={() => minus(data?.id)} disabled={data?.count === 1}>
          -
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
