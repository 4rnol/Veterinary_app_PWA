
const initState = {
  openDrawer: 0,
};

function appReducer(state = initState, action) {
  switch (action.type) {      
    default:
      return state.openDrawer-20;
  }
}

export default appReducer;