export const productReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return [...action.products]

    case 'FILTER_TASK':
      return state.filter(task => task._id !== action.task.taskId)

    default:
      return state
  }
}
