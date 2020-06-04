import React from 'react';
import MainCard from './MainCard';
import ActionButton from './ActionButton';
import { Droppable } from 'react-beautiful-dnd';



const List = ({title, cards, listID}) => {
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <MainCard key={card.id} index={index} text={card.text} id={card.id} />
          ))}
          <ActionButton listID={listID} />
          {provided.placeHolder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 6,
    marginRight: 8,
    height: '100%',
  },
};

export default List
