import React from 'react';

class TextSegment extends React.Component {
  render(props) {
    return (
      <div className="ui vertical stripe segment">
        <div
          style={{ paddingTop: '4em', paddingBottom: '3em' }}
          className="ui text container"
        >
          <h3 className="ui header">Final Comments</h3>
          <p>{this.props.lorem}</p>
        </div>
      </div>
    );
  }
}

export default TextSegment
