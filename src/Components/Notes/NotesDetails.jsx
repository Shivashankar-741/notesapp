import React, { useState, useContext } from "react";
import { NameContext } from "../State/NameContext";
import { IoMdSettings } from "react-icons/io";
import "./Notes.css";

// "Default": "#81b71a",
//                     "Blue": "#00B1E1",
//                     "Cyan": "#37BC9B",
//                     "Green": "#8CC152",
//                     "Red": "#E9573F",
//                     "Yellow": "#F6BB42",
// style={{ backgroundColor: "#F6BB42" }}

const NotesDetails = () => {
	const [name] = useContext(NameContext);
	const [popup, setPopup] = useState(true);
	const date = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();
	return (
		<div className="Notes--details">
			<div className={popup ? "settings--popup" : "settings--popupActive"}>
				<h1 className="popup--heading">Setting</h1>
				<div className="popup--fields">
					<label htmlFor="">Name</label>
					<input type="text" />
				</div>
				<div className="themes">
					<h1 className="theme--header">Select theme</h1>
				</div>
			</div>
			<div className="Notes--namenddata">
				<h1 className="Notes--name">welcome {name}</h1>
				<span className="Notes--date">{`${date} / ${
					month + 1
				} / ${year}`}</span>
			</div>
			<div className="Notes--settingsBtn" onClick={() => setPopup(!popup)}>
				<div className="Notes--settingsIcon">
					<IoMdSettings className="Notes--settingsIconIn" />
				</div>
				Settings
			</div>
		</div>
	);
};

export default NotesDetails;
