const initalState = [
  {
    title: 'Card 1',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'created static list & card',
      },
      {
        id: 1,
        text: 'we used a material UI to style components',
      },
    ],
  },
  {
    title: 'Card 2',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'created static list & card',
      },
      {
        id: 1,
        text: 'Rendering multiple cards',
      },
    ],
  },

];

const listsReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
