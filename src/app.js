import React from "react";
import Counter from "./components/counter/counter.js";
import Increment from "./components/increment/increment.js";
import Decrement from "./components/decrement/decrement.js";

export default class App extends React.Component {
  

  render() {
    return (
      <>
        <Decrement decrementCounter={this.decrementCounter} />
        <Counter banana={this.state} />
        <Increment incrementCounter={this.incrementCounter} />
      </>
    );
  }
}
