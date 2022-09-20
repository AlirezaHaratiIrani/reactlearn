import React from "react";

const Main = (props) => {
  React.useEffect(() => {
    console.log("Main.js UseEffect");
    setTimeout(() => {
      alert("HTTP request")
    }, 2000);
  }, []);

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
      <button style={btn} onClick={props.click}>
        Show/Hide Products
      </button>
    </>
  );
};

export default Main;
