import React from 'react';
import NavBar from './NavBar';
import SwipeableTemporaryDrawer from './NavBar';
import './hero.css';
import SimpleCard from './Card.js'
import './app.css';

const maxinfo = {
  name: 'max',
  job: 'Front End Dev',
  about:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo, nesciunt a provident dicta similique eveniet. Vitae, ipsam aliquid placeat odit molestias excepturi unde, ad dolore et labore omnis ratione?'
}
const beninfo = {
  name: 'max',
  job: 'Front End Dev',
  about:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo, nesciunt a provident dicta similique eveniet. Vitae, ipsam aliquid placeat odit molestias excepturi unde, ad dolore et labore omnis ratione?'
};
const jackinfo = {
  name: 'max',
  job: 'Front End Dev',
  about:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo, nesciunt a provident dicta similique eveniet. Vitae, ipsam aliquid placeat odit molestias excepturi unde, ad dolore et labore omnis ratione?'
};
const lewisinfo = {
  name: 'max',
  job: 'Front End Dev',
  about:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo, nesciunt a provident dicta similique eveniet. Vitae, ipsam aliquid placeat odit molestias excepturi unde, ad dolore et labore omnis ratione?'
};

class App extends React.Component {
  render() {
  return (
    <div className="heroImage">
      <NavBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingTop: '15%',
          flex: '1 0 auto',
          flexWrap: 'wrap',
          alignContent: 'space-between',
          height: 'auto'
        }}
      >
        <div className="container">
          <div className="box">
            <SimpleCard name="Max" info={maxinfo.about} />
          </div>
          <div className="box">
            <SimpleCard name="Ben" info={beninfo.about} />
          </div>
          <div className="box">
            <SimpleCard name="Jack" info={jackinfo.about} />
          </div>
          <div className="box">
            <SimpleCard name="Lewis" info={lewisinfo.about} />
          </div>
          <card />
        </div>
      </div>
    </div>
  );
}
}
export default App;
