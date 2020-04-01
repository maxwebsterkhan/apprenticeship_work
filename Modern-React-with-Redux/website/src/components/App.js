import React from 'react';
import NavBar from './NavBar';
import FullSegment from './FullSegment';
import SplitSegment from './SplitSegment';
import TwoSegment from './TwoSegment';
import TextSegment from './TextSegment';

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
        <div>
          <TwoSegment />
          <TextSegment />
        </div>
      </div>
    );
  }
}

export default App

