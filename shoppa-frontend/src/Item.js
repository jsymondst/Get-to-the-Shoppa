import React from "react";

const Item = (props) => {
  const { product } = props;
  return (
    <div>
      <h3>{product.product}</h3>
    </div>
  );
};

export default Item;
