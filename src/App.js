import React from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import Main from "./components/Main/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App.js Constructor");
  }

  state = {
    products: [
      {
        id: 1,
        title: "Book1",
        price: "99",
      },
      {
        id: 2,
        title: "Book2",
        price: "89",
      },
      {
        id: 3,
        title: "Book3",
        price: "79",
      },
    ],
    showProducts: false,
  };

  changePriceHandler = () => {
    this.setState({
      products: [
        {
          id: 1,
          title: "Book1",
          price: "59",
        },
        {
          id: 2,
          title: "Book2",
          price: "59",
        },
        {
          id: 3,
          title: "Book3",
          price: "59",
        },
      ],
    });
  };

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("App.js componentDidMount");
    return true;
  }

  componentDidUpdate() {
    console.log("App.js componentDidUpdate");
  }

  changeTitleHandler = (event, id) => {
    const products = [...this.state.products];
    const idx = products.findIndex((item) => item.id == id);
    if (idx >= 0) {
      products[idx].title = event.target.value;
      this.setState({
        products: products,
      });
    }
  };

  toggleProductHandler = () => {
    const show = this.state.showProducts;
    this.setState({ showProducts: !show });
  };

  deleteProductHandler = (id) => {
    const products = [...this.state.products];
    const idx = products.findIndex((item) => item.id == id);
    if (idx >= 0) {
      products.splice(idx, 1);
      this.setState({
        products: products,
      });
    }
  };

  render() {
    console.log("App.js Render");

    let products = null;
    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            products={this.state.products}
            delete={this.deleteProductHandler}
            click={this.changePriceHandler}
            change={this.changeTitleHandler}
          />
        </div>
      );
    }

    return (
      <div className="center">
        <Main click={this.toggleProductHandler} />
        {products}
      </div>
    );
  }
}

/*const App = () => {
  const [products, setProducts] = useState([
    {
        id: 1,
      title: "Book1",
      price: "99",
    },
    {
        id: 2,
      title: "Book2",
      price: "89",
    },
    {
        id: 3,
      title: "Book3",
      price: "79",
    },
  ]);

  const changePriceHandler = () => {
    setProducts([
      {
        id: 1,
        title: "Book1",
        price: "59",
      },
      {
        id: 2,
        title: "Book2",
        price: "59",
      },
      {
        id: 3,
        title: "Book3",
        price: "59",
      },
    ]);
  };

  return (
    <div id="main" className="container">
      <h2>React App</h2>
      {products.map((item, index) => {
        return <Product key={index} title={item.title} price={item.price} />;
      })}
      <button onClick={changePriceHandler}>Change Price</button>
    </div>
  );
};*/

export default App;
