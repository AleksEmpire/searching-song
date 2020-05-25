import React, { Component } from "react";
import spinner from "../../img/spinner.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src={spinner}
          alt="Loading"
          style={{ width: "200px", margin: "0px auto", display: "block" }}
        />
      </div>
    );
  }
}
