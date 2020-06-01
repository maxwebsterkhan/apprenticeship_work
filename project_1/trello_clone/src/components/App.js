import React, { Component } from 'react';
import List from '../components/List';
import { connect } from 'react-redux';
import  ActionButton from './ActionButton';

class App extends Component {
  render() {
    const { lists } = this.props
    return (
      <div className="App">
        <h2>Hello World</h2>
        <div style={styles.listsContainer}>
          {lists.map((list) => (
            <List key={list.id} title={list.title} cards={list.cards} />
          ))}
          <ActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect (mapStateToProps) (App);
