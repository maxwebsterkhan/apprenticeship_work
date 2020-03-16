import React from 'react';
import image from './hero.jpg';
import './App.css';

const styles = {
  hero: {
    backgroundImage: `url(${image})`
  }
};

class Hero extends React.Component {s
  render() {
    return (
        <div style={{height:'50vh', width: '100%'}}>
        <div style={styles.hero}>
          sdfewfwef
          </div>
        </div>

    );
           }

}

export default Hero
