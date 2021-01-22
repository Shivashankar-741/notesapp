import React, { useContext } from "react";
import { SetpopupContext } from "../../State/SetpopupContext";
import { ThemeContext } from "../../State/ThemeContext";
import { NameContext } from "../../State/NameContext";

const NotesDetailspopup = () => {
  const [popup, setPopup] = useContext(SetpopupContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const [name, setName] = useContext(NameContext);
  const [storeName, setStoreName] = React.useState("");

  const changeHandler = (e) => {
    setStoreName(e.target.value);
  };

  const enterPressed = (e) => {
    let keycode = e.keyCode || e.which;
    if (keycode === 13 && storeName !== "") {
      setName(storeName);
      e.target.value = "";
    }
  };

  return (
    <div className={popup ? "settings--popup" : "settings--popupActive"}>
      <h1 className="popup--heading">Settings</h1>
      <div className="popup--fields">
        <h2 className="popup--fieldsHead">Name</h2>
        <input
          type="text"
          className="popup--fieldsInput"
          placeholder="rechange your name"
          onChange={changeHandler}
          onKeyPress={enterPressed}
        />
      </div>
      <div className="themes">
        <h2 className="theme--header">Select theme</h2>
        <ul className="themes--colors">
          <li className="themes--colorsIn green" onClick={() => setTheme("#41a169")}></li>
          <li className="themes--colorsIn blue" onClick={() => setTheme("#61aae5")}></li>
          <li className="themes--colorsIn purple" onClick={() => setTheme("#8269d5")}></li>
          <li className="themes--colorsIn red" onClick={() => setTheme("#e53e3e")}></li>
          <li className="themes--colorsIn orange" onClick={() => setTheme("#dc6c31")}></li>
          <li className="themes--colorsIn darkBlue" onClick={() => setTheme("#5b69d8")}></li>
          <li className="themes--colorsIn lightGreen" onClick={() => setTheme("#319795")}></li>
          <li className="themes--colorsIn gray" onClick={() => setTheme("#718096")}></li>
          <li className="themes--colorsIn yellow" onClick={() => setTheme("#d59e31")}></li>
        </ul>
      </div>
      <div className="banner">
        <h2 className="bannerHeader">Banner image</h2>
        <input
          type="text"
          placeholder="grab image url link, put here"
          className="banner--fieldsInput"
        />
        <button className="bannerBtn">Remove Image</button>
      </div>

      <div className="save">
        <button
          className="save--btn"
          onClick={() => setPopup(true)}
          style={{ backgroundColor: theme }}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default NotesDetailspopup;
