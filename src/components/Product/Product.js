import React, { Component } from "react";
import "./Product.css";
// import Container from "../../hoc/Container";
import Wrapper from "../../hoc/Wrapper";
import AuthContext from "../../context/auth-context";

class Product extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus(); // 1
    this.inputRef.current.focus();
  }

  render() {
    console.log("Product Render");

    return (
      <React.Fragment>
        {/* <AuthContext.Consumer>
          {(context) =>
            context.auth ? <p>Logged in!</p> : <p>Please Login!</p>
          }
        </AuthContext.Consumer> */
        /*Model 1 */}
        {this.context.auth ? <p>Logged in!</p> : <p>Please Login!</p>}
        <p>Product Name: {this.props.title}</p>
        <p onClick={this.props.click}>Product Price: {this.props.price}</p>
        <p>{this.props.children}</p>
        <input
          // ref={(element) => (this.inputElement = element)} // 1
          ref={this.inputRef}
          type="text"
          onChange={(e) => this.props.change(e, this.props.id)}
        />
        <button onClick={this.props.delete}>Del</button>
      </React.Fragment>
    );
  }
}

export default Wrapper(Product, "product");

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
