import { Container, Heading } from "@chakra-ui/react";
import AddTodo from "./Component/AddTodo";
import Filter from "./Component/Filter";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <Container maxW="container.sm">
      <Heading my="4">Todo List</Heading>
      <AddTodo />
      <Filter />
      <TodoList />
    </Container>
  );
}

export default App;
