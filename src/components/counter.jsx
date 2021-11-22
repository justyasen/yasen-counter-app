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
        const { count } = this.state.count; 
        if(count === 0)
        {
          return "Zero"; 
        }
        else{
            return count; 
        }
    }

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

    handleIncrement = (product) => {
        this.setState({ count: this.state.count + 1}); 
    }
    doHandleIncrement = () =>{
      this.handleIncrement({ id: 1}); 
    }

  render() {
    return(
 <div>
   <span className = { this.getBadgeClasses() }> { this.formatCount() } </span>
   <button onClick = { this.doHandleIncrement} className = "btn btn-secondary btn-sm"> 
   Increment
   </button>
 </div>
    );
  }
}

export default Counter;
