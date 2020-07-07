import React, { Component, Fragment } from "react";

const API_URL = "http://localhost:3001/";

export default class Inputbox extends React.Component {
  state = {
    productCache: [],
  };

  productList = () => {
    const { productCache } = this.state;
    return productCache.map((item) => item.product);
  };

  getToken = () => {
    return localStorage.getItem("userJWT");
  };

  componentDidMount = () => {
    fetch(`${API_URL}products`, {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((allProducts) => {
        this.setState({
          productCache: allProducts,
        });
      });
  };

  render() {
    return (
      <input default={"magic"}></input>
      // <ul>
      //     {this.productList().map(product=> <li>{product}</li>)}
      // </ul>
    );
  }
}
