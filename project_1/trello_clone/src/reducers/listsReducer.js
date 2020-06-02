import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 4;

const initalState = [
  {
    title: 'Card 1',
    id: 0,
    cards: [
      {
        id: 0,
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illum, earum non quisquam nemo voluptatum expedita nostrum consequuntur et tenetur blanditiis enim culpa atque obcaecati omnis tempore vitae iste officiis?',
      },
      {
        id: 1,
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illum, earum non quisquam nemo voluptatum expedita nostrum consequuntur et tenetur blanditiis enim culpa atque obcaecati omnis tempore vitae iste officiis?',
      },
    ],
  },
  {
    title: 'Card 2',
    id: 1,
    cards: [
      {
        id: 0,
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illum, earum non quisquam nemo voluptatum expedita nostrum consequuntur et tenetur blanditiis enim culpa atque obcaecati omnis tempore vitae iste officiis?',
      },
      {
        id: 1,
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi illum, earum non quisquam nemo voluptatum expedita nostrum consequuntur et tenetur blanditiis enim culpa atque obcaecati omnis tempore vitae iste officiis?',
      },
    ],
  },
];

const listsReducer = (state = initalState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID,
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;

    default:
      return state;
  }
};

export default listsReducer;
