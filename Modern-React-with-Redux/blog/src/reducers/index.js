import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './usersReducer';
export default combineReducers({
  // combines list of reducers - reducer checks
  posts: postsReducer, // Assigned postsReducer/userReducers as a key value to the post key
  users: userReducer,
});

/* A reducer must be a "pure" function this means that it does not reach outside of its scope.
 E.G an API request. A reducer checks for the action type
 and it either returns the payload (data) or returns inital state
  which we have defined as an empty array as default on the reducers.

  if there is no new Data will also return previous state
*/
