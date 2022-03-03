import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE, EDIT } from "./actionTypes";

let nextTodoId = Math.random();
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
export const deletetodo = (id) => ({
  type: DELETE,
  payload: { id },
});
export const edittodo = (id, newcontent) => ({
  type: EDIT,
  payload: { id, newcontent },
});
