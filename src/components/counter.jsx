import React, { Component } from "react";

class Counter extends React.Component {
    //state is an object that includes any data that the component needs
    state = {
        count: 0
    };
  render() {
    React.createElement("div");
    return (
        //span can be used to render a value dynamically with {}, we have to use this. to reference the current object and then we can point to the expression we want to render
      <React.Fragment>
        <span> {this.state.count} </span>
        <button> Increment </button>
      </React.Fragment>
    );
  }
}

export default Counter;
