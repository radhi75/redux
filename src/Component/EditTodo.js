import { EditIcon } from "@chakra-ui/icons";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { edittodo } from "../redux/reducer/actions";
import { useDispatch } from "react-redux";

const EditTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const [newcontent, setChange] = useState(todo.content);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setChange(e.target.value);
  };
  const handleSave = () => {
    if (newcontent) {
      dispatch(edittodo(todo.id, newcontent));
      handleClose();
    } else {
      alert("you can not put an empty task");
    }
  };
  return (
    <div>
      <Button onClick={handleShow}>
        <EditIcon />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Input
            onChange={handleChange}
            placeholder="new todo"
            value={newcontent}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTodo;
