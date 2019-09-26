import React, {Component} from 'react';
export const counterContext = React.createContext();


class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      incrementCounter: this.incrementCounter,
      decrementCounter: this.decrementCounter
    };
  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render(){
    return (
      <counterContext.Provider value={this.state}>
        {this.props.children}
      </counterContext.Provider>

    )
  }

}

export default ContextProvider;