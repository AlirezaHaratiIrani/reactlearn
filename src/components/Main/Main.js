import React, { useContext, useRef } from "react";
import AuthContext from "../../context/auth-context";

const Main = (props) => {
  const authContext = useContext(AuthContext);
  const btnRef = useRef(null);

  React.useEffect(() => {
    console.log("Main.js UseEffect");
    // setTimeout(() => {
    //   alert("HTTP request");
    // }, 2000);

    btnRef.current.click();

    return () => {
      console.log("Main.js cleanup");
    };
  }, [props.products]);

  const btn = {
    backgroundColor: "#7b1fa2",
    color: "#FFFFFF",
    font: "inherit",
    border: "none",
    outline: "none",
    borderRadius: "3px",
    padding: "0.6rem",
    margin: "0.6rem auto",
  };

  return (
    <>
      <h2>React App</h2>
      <button ref={btnRef} style={btn} onClick={props.click}>
        Show/Hide Products
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Login</button>
    </>
  );
};

export default Main;
