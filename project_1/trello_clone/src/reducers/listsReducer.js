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
    default:
      return state;
  }
};

export default listsReducer;
