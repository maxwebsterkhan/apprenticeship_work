import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // initialised state with empty string.

  onFormSubmit = event => {
                            event.preventDefault();
                            console.log(this.state.term);
                            // Prevents default behaviour and logs submitted data.
                          };

  render() {
    return (
      <div className="ui search">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              value={this.state.term}
              // Sets state with users input - creating a controlled element
              // which means we do not reach into the DOM(document object model) for data
              // on change takes in e as a synthetic event and re-renders the state 'term' with the event target value
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Search..."
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;




