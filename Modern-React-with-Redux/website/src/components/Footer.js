import React from 'react'

class Footer extends React.Component {
render(props) {
  return (
    <div className="ui inverted verticle footer segment">
      <div className="ui container">
        <div
          style={{ padding: '1em 0 2em 0' }}
          className="ui stackable inverted divided equal height stackable grid"
        >
          <div className="five wide column">
            <h4>Contact us</h4>
            <div className="ui list">
              <div className="item">
                <i className="marker icon"></i>
                <div className="content">{this.props.location}</div>
              </div>
              <div className="item">
                <i className="mail icon"></i>
                <div className="content">
                  <a href="mailto:email.email.com">{this.props.email}</a>
                </div>
              </div>
              <div className="item">
                <i className="linkedin icon"></i>
                <div className="content">
                  <a href="http://www.linkedin.com">{this.props.linkedin}</a>
                </div>
              </div>
              <div className="item">
                <i className="github icon"></i>
                <div className="content">
                  <a href="http://www.github.com">{this.props.github}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="seven wide column">
            <h4>Footer header</h4>
            <p>{this.props.lorem}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Footer
