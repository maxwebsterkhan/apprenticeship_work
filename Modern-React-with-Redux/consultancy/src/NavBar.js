import React from 'react';
import image from './menu.png';

class NavBar extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <div
          class="ui secondary pointing menu"
          style={{ padding: '20px 0 0 40px', fontSize: '15px' }}
        >
          <a style={{ backgroundColor: 'black', color: 'white' }} class="item">
            Nav element 1
          </a>
          <a style={{ backgroundColor: 'black', color: 'white' }} class="item">
            Nav element 2
          </a>
          <a style={{ backgroundColor: 'black', color: 'white' }} class="item">
            Nav element 3
          </a>
          <div
            class="right menu"
            style={{ fontSize: '15px', padding: '0 40px 0 0' }}
          >
            <a
              style={{
                backgroundColor: 'black',
                color: 'white'
              }}
              class="ui item"
            >
              Contact us
            </a>
          </div>
        </div>
        <div style={{ backgroundColor: 'black' }} class="ui segment">
          <p></p>
        </div>
      </div>
    );
  }

}

export default NavBar
