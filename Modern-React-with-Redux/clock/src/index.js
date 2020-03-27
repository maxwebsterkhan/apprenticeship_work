import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
