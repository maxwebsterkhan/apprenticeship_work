import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './userHeader';


class PostList extends Component {
  componentDidMount() {
    // Lifecycle method which renders only upon initializion
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    /* Function to map over each object recieved by the "posts" API call
    which we render on screen using the props system to specficy which data we require */
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    })
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
    //  Calls the render method which calls render list which shows each post on screen.
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
  /*
  mapStateToProps is a function which is given as a first argument to the connect function
  in our case we are assigning the data returned from state.posts to the key of posts
  which we can use in our component as props.
  */
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
// Connect function connects to Redux store with state and dispatch function to be able to usable as a prop

