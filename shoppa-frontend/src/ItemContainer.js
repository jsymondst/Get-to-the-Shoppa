import React, { Fragment } from "react";
import Item from "./Item";

const ItemContainer = (props) => {
  const { category, products } = props;

  const renderAllItems = () => {
    return products.map((product, index) => {
      console.log(product);
      return <Item product={product} key={index} />;
    });
  };

  return (
    <div className="item-container">
      <h2>{category}</h2>
      {renderAllItems()}
    </div>
  );
};

export default ItemContainer;
