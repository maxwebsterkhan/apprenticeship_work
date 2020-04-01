import React from 'react';
import NavBar from './NavBar';
import FullSegment from './FullSegment';
import SplitSegment from './SplitSegment';
import TwoSegment from './TwoSegment';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui inverted container">
            <NavBar />
            <FullSegment />
          </div>
        </div>
        <div>
          <SplitSegment />
        </div>
        <TwoSegment />
      </div>
    );
  }
}

export default App

