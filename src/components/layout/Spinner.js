import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="...loading" style={spinnerStyles} />
    </Fragment>
  );
};

const spinnerStyles = { display: "block", width: "200px", margin: "auto" };
export default Spinner;
