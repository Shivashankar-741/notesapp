import React, { useContext } from "react";
import { ThemeContext } from "../../State/ThemeContext";

const NotesReviewList = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className="NotesReviewList">
      <div className="NotesReviewList--in">
        <h3 className="NotesReviewList--title">Review</h3>
        <button className="NotesReviewList--btn" style={{ backgroundColor: theme }}>
          Add task
        </button>
      </div>
    </div>
  );
};

export default NotesReviewList;
