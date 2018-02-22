import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
      // return [...state, Object.assign({}, action.course)];
      // state.push(action.course);
      // return state;

    default:
      return state;
  }
}
