import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import "./Styles/App.scss";
import InputTodo from "./Components/InputTodo";
import Todos from "./Components/Todos";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("dark-mode") === "true"
  );
  const toggleTheme = () => {
    setDark(!dark);
  };

  const loadedArr = localStorage.getItem("userTodos")
    ? JSON.parse(localStorage.getItem("userTodos"))
    : [];

  const [arr, setArr] = useState(loadedArr);

  useEffect(() => {
    localStorage.setItem("userTodos", JSON.stringify(arr));
    localStorage.setItem("dark-mode", dark);
  }, [arr, dark]);

  return (
    <div id={dark ? "dark" : "light"}>
      <div className="back-pic"></div>
      <Container>
        <NavBar toggleTheme={toggleTheme} dark={dark}/>
        <InputTodo arr={arr} setArr={setArr} />
        <Todos arr={arr} setArr={setArr} />
      </Container>
    </div>
  );
}

export default App;
