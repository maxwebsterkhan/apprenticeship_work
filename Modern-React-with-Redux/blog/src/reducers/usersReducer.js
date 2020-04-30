export default (state = [], action) => {
switch (action.type) {
  case 'FETCH_USER':
    return [...state, action.payload];
    /* Spread operator used as we  must always a return a NEW array
     of state with payload from action creator from previous version
     if we do not return a new array the app will no re-render as Redux will not notice changes*/
  default:
    return state;
}

}
