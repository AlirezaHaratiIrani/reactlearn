import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    console.log("Product Render");

    return (
      <div className="product">
        <p>Product Name: {this.props.title}</p>
        <p onClick={this.props.click}>Product Price: {this.props.price}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={(e) => this.props.change(e, this.props.id)} />
        <button onClick={this.props.delete}>Del</button>
      </div>
    );
  }
}

export default Product;

/*
import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log("Product")

  return (
    <div className="product">
      <p>Product Name: {props.title}</p>
      <p onClick={props.click}>Product Price: {props.price}</p>
      <p>{props.children}</p>
      <input type="text" onChange={(e)=>props.change(e, props.id)} />
      <button onClick={props.delete}>Del</button>
    </div>
  );
};

export default Product;
*/
