import React, { Component } from "react";

class Counter extends React.Component {
    //state is an object that includes any data that the component needs
    state = {
        count: 0
    };
    // constructor(){
    //   super(); 
    //   this.handleIncrement = this.handleIncrement.bind(this); 
    // }

    formatCount()
    {
      //destructuring count so code is not repetative
        const { count } = this.state.count; 
        if(count === 0)
        {
          return "Zero"; 
        }
        else{
            return count; 
        }
    }

    //encapsulated this method so it is easier and much more scalable
    getBadgeClasses()
    {
        let classes = "badge m-2 badge-"; 
        if(this.state.count === 0)
        {
          classes += "warning"; 
        }
        else
        {
          classes += "primary";
        }
        return classes; 
    }

    handleIncrement = product => {
      console.log(product); 
        this.setState({ count: this.state.count + 1}); 
    }

  render() {
    return(
  <div>
   <span className = { this.getBadgeClasses() }> { this.formatCount() } </span>
   <button
    onClick = { () => this.handleIncrement(this.product) } 
    className = "btn btn-secondary btn-sm"> 
   Increment
   </button>
 </div>
    );
  }
}

export default Counter;
