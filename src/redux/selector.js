import { FILTER } from "../Constant";

export const getTodosByVisibilityFilter = (store, Filter) => {
  switch (Filter) {
    case FILTER.COMPLETED:
      return store.todos.filter((todo) => todo.completed);
    case FILTER.INCOMPLETED:
      return store.todos.filter((todo) => !todo.completed);
    default:
      return store.todos;
  }
};
