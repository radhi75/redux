import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import { Todo } from "./Todo";

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state);
  const filterTodos = getTodosByVisibilityFilter(todos, filter);

  return (
    <Box my={3}>
      {filterTodos.length ? (
        filterTodos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      ) : (
        <Box textAlign="center" my="4">
          No Todos 
        </Box>
      )}
    </Box>
  );
};
export default TodoList;
