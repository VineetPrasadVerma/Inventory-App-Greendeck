export const productReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return [...action.products]

    case 'FILTER_PRODUCTS':
      return [...action.products]

    default:
      return state
  }
}
