import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from './components/context/context.js';

import App from './app.js';

class Main extends React.Component {
  render() {
    
    return (
    <ContextProvider >
      <App />

    </ContextProvider>
    
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
