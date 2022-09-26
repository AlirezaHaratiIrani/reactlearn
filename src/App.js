import React from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import Main from "./components/Main/Main";
import Container from "./hoc/Container";
import Wrapper from "./hoc/Wrapper";
import AuthContext from "./context/auth-context";

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
    showMain: true,
    auth: false,
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

  loginHandler = () => {
    this.setState({ auth: true });
  };

  render() {
    console.log("App.js Render");

    let products = null;
    if (this.state.showProducts) {
      products = (
        <div>
          <ProductList
            isAuth={this.state.auth}
            products={this.state.products}
            delete={this.deleteProductHandler}
            click={this.changePriceHandler}
            change={this.changeTitleHandler}
          />
        </div>
      );
    }

    return (
      <Container>
        <button
          onClick={() => {
            this.setState({ showMain: false });
          }}
        >
          Remove
        </button>
        <AuthContext.Provider
          value={{ auth: this.state.auth, login: this.loginHandler }}
        >
          {this.state.showMain ? (
            <Main
              login={this.loginHandler}
              products={this.state.products}
              click={this.toggleProductHandler}
            />
          ) : null}
          {products}
        </AuthContext.Provider>
      </Container>
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

// export default App;
export default Wrapper(App, "center");
