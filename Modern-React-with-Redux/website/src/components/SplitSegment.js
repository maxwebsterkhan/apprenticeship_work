import React from 'react';

class SplitSegment extends React.Component {
  render(props) {
    return (
      <div
        style={{ marginTop: '4em', marginBottom: '4em' }}
        className="ui vertical stripe segment"
      >
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 style={{ fontSize: '2em' }} className="ui header">
                Stuff about website
              </h3>
              <p>
                {this.props.lorem}
                {this.props.lorem}
              </p>
              <h3 style={{ fontSize: '2em' }} className="ui header">
                More stuff about website
              </h3>
              <p>
                {this.props.lorem}
                {this.props.lorem}
              </p>
            </div>
            <div className="six wide right floated column">
              <img
                src={require('./image1.jpg')}
                alt=""
                className="ui large rounded image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplitSegment;
