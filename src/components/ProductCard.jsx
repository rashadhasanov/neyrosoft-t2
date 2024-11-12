import React from "react";

function ProductCard({ data, basket, products, setBasket }) {
  let newBasket = [...basket];
  const addTocart = (id) => {
    let checkBasket = newBasket.find((el) => el.id === id);
    if (checkBasket) {
      checkBasket.count += 1;
    } else {
      let checkProduct = products.find((el) => el.id === id);
      checkProduct.count = 1;
      newBasket = [...newBasket, checkProduct];
    }

    setBasket(newBasket);
    localStorage.setItem("basketArr", JSON.stringify(newBasket));
  };
  return (
    <div className="card">
      <p>{data?.title}</p>
      <button onClick={() => addTocart(data?.id)}>add</button>
    </div>
  );
}

export default ProductCard;
