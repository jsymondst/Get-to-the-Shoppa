import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Inputbox from "./Inputbox";
import ItemContainer from "./ItemContainer";

export default class Main extends React.Component {
  state = {
    currentItems: [
      { category: "pharmacy", product: "toothpaste" },
      { category: "pharmacy", product: "shower gel" },
      { category: "pharmacy", product: "soap" },
      { category: "produce", product: "bananas" },
      { category: "produce", product: "lettuce" },
    ],
  };

  addItem = (item) => {
    const { currentItems } = this.state;
    this.setState({
      currentItems: [...currentItems, item],
    });
  };

  renderMainTopBar = () => {
    return (
      <div className="mainTopBar">
        <p>logged in as {this.props.user}</p>
        <Inputbox />
      </div>
    );
  };

  renderAllItemContainers = () => {
    const { currentItems } = this.state;
    const itemArrayCollection = {};
    const arrayOfItemCollectionComponents = [];

    currentItems.forEach((product, index) => {
      product.fullListIndex = index;
      if (itemArrayCollection[product.category]) {
        itemArrayCollection[product.category].push(product);
      } else {
        itemArrayCollection[product.category] = [product];
      }
    });

    for (const category in itemArrayCollection) {
      const productArray = itemArrayCollection[category];
      const newIC = (
        <ItemContainer category={category} products={productArray} />
      );
      arrayOfItemCollectionComponents.push(newIC);
    }

    return arrayOfItemCollectionComponents;
  };

  render() {
    return (
      <div className="main-container">
        <Sidebar />
        <div className="main">
          {/* <p>logged in as {this.props.user}</p>
          <Inputbox /> */}
          {this.renderMainTopBar()}
          {this.renderAllItemContainers()}
        </div>
      </div>
    );
  }
}
