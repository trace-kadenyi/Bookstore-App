// Actions
const CHECK_STATUS = 'bookstore-app/categories/CHECK_STATUS';
// Reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};
// Action Creator
export const checkStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducer;
