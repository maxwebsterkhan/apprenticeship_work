import React, { Component } from 'react';
import List from '../components/List';
import { connect } from 'react-redux';
import  ActionButton from './ActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';

class App extends Component {
  onDragEnd = (result) => {
    // TODO: reordering logic
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Hello World</h2>
          <div style={styles.listsContainer}>
            {lists.map((list) => (
              <List
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <ActionButton list />
          </div>
        </div>
      </DragDropContext>
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
