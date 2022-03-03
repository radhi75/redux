import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deletetodo } from "../redux/reducer/actions";
import { DeleteIcon } from "@chakra-ui/icons";
import EditTodo from "./EditTodo";
import "./Todo.css"

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setChecked] = useState(false);
  const handleCheked = () => dispatch(toggleTodo(todo.id));
  const handleClick = (id) => dispatch(deletetodo(id));
  useEffect(() => {
    setChecked(todo.completed);
  }, [todo]);

  return (
    <div className="container">
      <Box mb={1} bgColor="lightcoral" p={2}>
        <Checkbox onChange={handleCheked} colorScheme="teal" isChecked={cheked}>
          <Text as={todo.completed && "del"}>{todo.content}</Text>
        </Checkbox>
      </Box>
      <div className="bts">
        <Button onClick={() => handleClick(todo.id)}>
          <DeleteIcon />
        </Button>
        <EditTodo todo={todo} />
      </div>
    </div>
  );
};
export default Todo;
