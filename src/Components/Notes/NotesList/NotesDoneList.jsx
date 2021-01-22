import React, { useContext } from "react";
import { ThemeContext } from "../../State/ThemeContext";

const NotesDoneList = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className="NotesDoneList">
      <div className="NotesDoneList--in">
        <h3 className="NotesDoneList--title">Done</h3>
        <button className="NotesDoneList--btn" style={{ backgroundColor: theme }}>
          Add task
        </button>
      </div>
    </div>
  );
};

export default NotesDoneList;
