import React, { useContext } from "react";
import { ThemeContext } from "../../State/ThemeContext";
const NotesProgressList = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className="NotesProgressList">
      <div className="NotesProgressList--in">
        <h3 className="NotesProgressList--title">In Progress</h3>
        <button className="NotesProgressList--btn" style={{ backgroundColor: theme }}>
          Add task
        </button>
      </div>
    </div>
  );
};

export default NotesProgressList;
