import React from "react";
import BasketCard from "./BasketCard";

function Basket({ basket, setBasket }) {
  return (
    <div>
      {basket?.map((data, i) => {
        return (
          <BasketCard
            data={data}
            key={i}
            basket={basket}
            setBasket={setBasket}
          />
        );
      })}
    </div>
  );
}

export default Basket;
