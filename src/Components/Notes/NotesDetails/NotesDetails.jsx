import React, { useContext } from "react";
import { NameContext } from "../../State/NameContext";
import { SetpopupContext } from "../../State/SetpopupContext";
import { IoMdSettings } from "react-icons/io";
import NotesDetailspopup from "./NotesDetailspopup";

// style={{ backgroundColor: "#F6BB42" }}

const NotesDetails = () => {
	const [name] = useContext(NameContext);
	const [popup, setPopup] = useContext(SetpopupContext);

	return (
		<div className="Notes--details">
			<NotesDetailspopup />

			<div className="Notes--namenddata">
				<h1 className="Notes--name">welcome {name}</h1>
				<span className="Notes--date">{`${new Date().getDate()} / ${
					new Date().getMonth() + 1
				} / ${new Date().getFullYear()}`}</span>
			</div>
			<div className="Notes--settingsBtn" onClick={() => setPopup(false)}>
				<div className="Notes--settingsIcon">
					<IoMdSettings className="Notes--settingsIconIn" />
				</div>
				Settings
			</div>
		</div>
	);
};

export default NotesDetails;
