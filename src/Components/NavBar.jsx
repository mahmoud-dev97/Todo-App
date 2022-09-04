import sunicon from "../Assets/Images/icon-sun.svg";
import moonicon from "../Assets/Images/icon-moon.svg";

function NavBar({ toggleTheme, dark }) {
  return (
    <div id="todo-nav" className="d-flex justify-content-between">
      <h1 className="fw-bold">T O D O</h1>
      <img
        onClick={toggleTheme}
        src={dark ? sunicon : moonicon}
        alt="sunicon"
      />
    </div>
  );
}

export default NavBar;
