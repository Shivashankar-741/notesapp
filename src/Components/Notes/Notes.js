import React, { useState } from "react";
import "./Notes.css";
import { NameContext } from "../State/NameContext";
import { IoMdSettings } from "react-icons/io";

const Notes = () => {
	const [name] = React.useContext(NameContext);
	const [popup, setPopup] = useState(true);
	const date = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();

	return (
		<div className="Notes">
			<div
				className={popup ? "settings--popupActive" : "settings--popup"}
			></div>
			<div className="Notes--details">
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
		</div>
	);
};

export default Notes;
