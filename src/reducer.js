import { ACTIONS } from './actions';

export const reduce = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...state, { id: Date.now(), title: action.title }];
    case ACTIONS.DELETE_TASK:
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};
