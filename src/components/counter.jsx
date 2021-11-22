import React, { Component } from "react";

class Counter extends React.Component {
    //state is an object that includes any data that the component needs
    state = {
        count: 0,
    };
    //encapsulating the method using VSCode refactoring into a standalone method. 
  render() {

    React.createElement("div"); 
    return (
        //span can be used to render a value dynamically with {}, we have to use this. to reference the current object and then we can point to the expression we want to render
      <React.Fragment>
        <span className = { this.changeBtnType() } > {this.formatCount()} </span>
        <button className = "btn btn-secondary btn-sm"> Increment </button>
      </React.Fragment>
    );
  }
  //encapsulated method
  changeBtnType() {
    let classes = "badge m-2 badge-";
    if (this.state.count === 0) {
      classes += "warning";
    }

    else {
      classes += "primary";
    }
    return classes;
  }

//Function that returns value of count. 
  formatCount()
  {
    //destructuring to make code less repetative
    const { count } = this.state; 
      if(count === 0)
      {
          return "Zero"; 
      }
      else
      {
          return count; 
      }
  }

}

export default Counter;
