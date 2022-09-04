import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function Todo({ todo, setArr, arr }) {
  const deleteTodo = (task) => {
    setArr(arr.filter((e) => e.id !== task));
  };

  const complete = (task) => {
    const com = arr.map((e) => {
      if (e.id === task.id) {
        return { ...e, completed: true };
      } else {
        return e;
      }
    });
    setArr(com);
  };

  return (
    <div id="todo" className="d-flex align-items-center border-1 border-bottom">
      {todo.completed ? (
        <BsCheckCircleFill className="check circle" />
      ) : (
        <BsCircle className="circle" />
      )}

      <p
        className={todo.completed ? "active mb-0 w-100" : "mb-0 w-100"}
        onClick={() => complete(todo)}
      >
        {todo.todoName}
      </p>
      <AiOutlineClose
        onClick={() => deleteTodo(todo.id)}
        className="circle m-0"
      />
    </div>
  );
}

export default Todo;
