import { ADD_TODO, TOGGLE_TODO, DELETE, EDIT } from "../reducer/actionTypes";
const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, content } = action.payload;
      return {
        todos: [...state.todos, { content, completed: false, id }],
      };

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );
      return { todos };
    }
    case DELETE: {
      const { id } = action.payload;
      return { todos: state.todos.filter((todo) => todo.id !== id && todo) };
    }
    case EDIT: {
      const { id, newcontent } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...state.todos, content : newcontent } : todo
        ),
      };
    }

    default: {
      return state;
    }
  }
};
export default todos;
