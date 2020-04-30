import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserHeader extends Component {

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    console.log(user);
    return <div className="header">{user.name}</div>;

  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
  // ownProps is a secondary argument to use data from props to retrieve data from Redux store.
}

export default connect(mapStateToProps)(UserHeader);
