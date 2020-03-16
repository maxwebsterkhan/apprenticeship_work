import React from 'react';
import tmdb from '../api/tmbd'
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async term => {
    const response = await tmdb.get('/search/movies');
    console.log(response)
  }

  render() {
    return (
    <div className="ui container">
     <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
