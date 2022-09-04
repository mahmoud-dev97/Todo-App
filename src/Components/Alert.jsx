import Modal from "react-bootstrap/Modal";

function Alert(props) {
  return (
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="fs-1">Please enter a task</Modal.Body>
    </Modal>
  );
}
export default Alert;
