import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserHeader extends Component {

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
    // Returns a div which renders the post authors name
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
  /* mapStateToProps is a function which is given as a first argument to the connect function
  ownProps is a secondary argument to use data needed from props to retrieve data from Redux store.
  */
}

export default connect(mapStateToProps)(UserHeader);
