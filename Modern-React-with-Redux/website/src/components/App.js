import React from 'react';
import NavBar from './NavBar';
import FullSegment from './FullSegment';
import SplitSegment from './SplitSegment';
import TwoSegment from './TwoSegment';
import TextSegment from './TextSegment';
import Footer from './Footer';
// Data object with random data inside
const info = {
  location: 'Bristol, UK',
  email: 'email@email.com',
  linkedin: 'www.linkedin.com',
  github: 'www.github.com',
  lorem:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nostrum repellat error illum eius officiis cum suscipit accusantium assumenda molestiae est voluptate consectetur, doloribus dolorem quo obcaecati pariatur laudantium voluptates.'
};


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
          <SplitSegment lorem={info.lorem} />
        </div>
        <div>
          <TwoSegment lorem={info.lorem} />
          <TextSegment lorem={info.lorem} />
        </div>
        <Footer
          location={info.location}
          email={info.email}
          linkedin={info.linkedin}
          github={info.github}
          lorem={info.lorem}
        />
      </div>
    );
  }
}

export default App

