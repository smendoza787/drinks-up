export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return state.concat(action.payload)
    default:
      return state
  }
}
