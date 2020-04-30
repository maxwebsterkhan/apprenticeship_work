import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts) // Requests list of posts
    .map('userId') // Maps over Posts
    .uniq() // Maps over each post
    .forEach((id) => dispatch(fetchUser(id))) // For each unique ID runs fetchUser function
    .value(); // Executes chain method.
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts'); // API call

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
  /* Action creator - This returns a payload (object)
  with the data recieved from API call for the list of records
  which is dispatched to our redux store
  */
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`) // API call

  dispatch({ type: 'FETCH_USER', payload: response.data });
  /* Action creator - This returns a payload (object)
   with the data recieved from API call for the list of user IDs
  which will be dispatched to our redux store */
};




// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

// calls the Memoize function to fetch User id
// API call for an object containing list of user data using IDs

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
// /* Memoize function to prevent same API call being called

/*  This reduces the number of network requests https://lodash.com/docs/#memoize */
