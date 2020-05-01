export default (state = [], action) => {
switch (action.type) {
  case 'FETCH_USER':
    return [...state, action.payload];
    /* Spread operator used as we must always return a NEW array instead of overwriting the previous one.
     Returns new state with the payload from the action creator.
     if we do not return a new array the app will not re-render as Redux will not notice changes */
    default:
    return state;
}
}
