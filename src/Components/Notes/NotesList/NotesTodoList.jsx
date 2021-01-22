import React, { useContext } from "react";
import { ThemeContext } from "../../State/ThemeContext";

const NotesTodoList = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  //

  return (
    <div className="NotesTodoList">
      <div className="NotesTodoList--in">
        <h3 className="NotesTodoList--title">Todo</h3>
        <button className="NotesTodoList--btn" style={{ backgroundColor: theme }}>
          Add task
        </button>
      </div>
    </div>
  );
};

export default NotesTodoList;
