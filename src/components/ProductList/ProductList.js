import React from "react";
import Product from "../Product/Product";

class ProductList extends React.Component {
  shouldComponentUpdate(nexrProps, nextState) {
    console.log("ProductList shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ProductList getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("ProductList componentDidUpdate");
  }

  render() {
    console.log("ProductList Render");

    return this.props.products.map((item, index) => {
      return (
        <Product
          key={index}
          id={item.id}
          title={item.title}
          price={item.price}
          delete={() => this.props.delete(item.id)}
          click={this.props.click}
          change={this.props.change}
        />
      );
    });
  }
}

export default ProductList;

/*
import React from "react";
import Product from "../Product/Product";

const ProductList = (props) => {
  console.log("ProductList");

  return props.products.map((item, index) => {
    return (
      <Product
        key={index}
        id={item.id}
        title={item.title}
        price={item.price}
        delete={() => props.delete(item.id)}
        click={props.click}
        change={props.change}
      />
    );
  });
};

export default ProductList;

 */
