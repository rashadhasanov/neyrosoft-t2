import React from "react";
import ProductCard from "./ProductCard";

function Products({ products, basket, setBasket }) {
  return (
    <div>
      {products?.map((data, i) => {
        return (
          <ProductCard
            setBasket={setBasket}
            data={data}
            key={i}
            basket={basket}
            products={products}
          />
        );
      })}
    </div>
  );
}

export default Products;
