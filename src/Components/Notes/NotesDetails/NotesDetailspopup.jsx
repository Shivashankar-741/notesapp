import React, { useContext } from "react";
import { SetpopupContext } from "../../State/SetpopupContext";

const NotesDetailspopup = () => {
	const [popup, setPopup] = useContext(SetpopupContext);

	return (
		<div className={popup ? "settings--popup" : "settings--popupActive"}>
			<h1 className="popup--heading">Settings</h1>
			<div className="popup--fields">
				<h2 className="popup--fieldsHead">Name</h2>
				<input
					type="text"
					className="popup--fieldsInput"
					placeholder="rechange your name"
				/>
			</div>
			<div className="themes">
				<h2 className="theme--header">Select theme</h2>
				<ul className="themes--colors">
					<li className="themes--colorsIn green"></li>
					<li className="themes--colorsIn blue"></li>
					<li className="themes--colorsIn purple"></li>
					<li className="themes--colorsIn red"></li>
					<li className="themes--colorsIn orange"></li>
					<li className="themes--colorsIn darkBlue"></li>
					<li className="themes--colorsIn lightGreen"></li>
					<li className="themes--colorsIn gray"></li>
					<li className="themes--colorsIn yellow"></li>
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
				<button className="save--btn" onClick={() => setPopup(true)}>
					save
				</button>
			</div>
		</div>
	);
};

export default NotesDetailspopup;
