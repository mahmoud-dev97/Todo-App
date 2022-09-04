import { useState } from "react";
import { BsCircle } from "react-icons/bs";
import Alert from "./Alert";
function InputTodo({ arr, setArr }) {
  const [inpValue, setInpValue] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (inpValue.length > 0) {
      const task = {
        id: Math.floor(Math.random() * 500 + 1),
        todoName: inpValue,
        completed: false,
      };
      setArr([task, ...arr]);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div id="input-todo" className="d-flex align-items-center mt-5 mb-4 rounded">
        <BsCircle onClick={handleClick} className="circle" />
        <input
          onChange={(e) => setInpValue(e.target.value)}
          type="text"
          placeholder="Create a new todo..."
        />
      </div>
      <Alert show={show} onHide={() => setShow(false)} />
    </>
  );
}

export default InputTodo;
