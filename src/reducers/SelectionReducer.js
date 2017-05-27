export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return null;
  }
};

//we added the "state" + "action" args just in order to use them in a
//console.log. this also works without writing them - since the reducer are
//always called with state and action
