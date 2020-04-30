import React from 'react';
import PostList from './PostList';
const App = () => { // functional component as a class based component would be used to utilize state.
  return (
     <div className="ui container">
       <PostList/>
       </div>
  )
};

export default App
