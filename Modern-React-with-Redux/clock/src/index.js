import React from 'react';
import ReactDOM from 'react-dom';
import tick from './Clock.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <tick />
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('root'));
