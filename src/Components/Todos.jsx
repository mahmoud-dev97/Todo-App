import Todo from "./Todo";
import { useState, useEffect } from "react";

function Todos({ arr, setArr }) {
  const [filterArr, setFilterArr] = useState([]);

  useEffect(() => {
    setFilterArr(arr);
  }, [arr]);

  const complete = () => {
    setFilterArr(arr.filter((e) => e.completed));
  };

  const all = () => {
    setFilterArr(arr);
  };

  const active = () => {
    setFilterArr(arr.filter((e) => e.completed === false));
  };

  const clear = () => {
    const com = arr.map((e) => {
      return { ...e, completed: false };
    });
    setArr(com);
  };

  return (
    <>
      <div id="todos" className="rounded">
        {filterArr.map((todo) => (
          <Todo key={todo.id} todo={todo} setArr={setArr} arr={arr} />
        ))}
        <div
          id="btns"
          className="d-flex align-items-center justify-content-between"
        >
          <span>{arr.length} items left</span>
          <div className="mid d-none d-md-block">
            <span onClick={all} className="me-3 active">
              All
            </span>
            <span onClick={active} className="me-3">
              Active
            </span>
            <span onClick={complete}>Completed</span>
          </div>
          <span onClick={clear}>Clear Completed</span>
        </div>
      </div>
      <div
        id="dnone"
        style={{ padding: "20px" }}
        className="mt-4 rounded d-flex align-items-center justify-content-center d-block d-md-none"
      >
        <span onClick={all} className="me-3 active">
          All
        </span>
        <span onClick={active} className="me-3">
          Active
        </span>
        <span onClick={complete}>Completed</span>
      </div>
    </>
  );
}

export default Todos;
