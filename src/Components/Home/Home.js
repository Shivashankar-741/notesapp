import React, { useContext } from "react";
import "./Home.css";
import { NameContext } from "../State/NameContext";

const Home = () => {
	const [name, setName] = useContext(NameContext);
	const [storeName, setStoreName] = React.useState("");
	const [active, setActive] = React.useState(true);

	console.log(name);

	const changeHandler = (e) => {
		setStoreName(e.target.value);
	};

	const enterPressed = (e) => {
		let keycode = e.keyCode || e.which;
		if (keycode === 13 && storeName !== "") {
			setName(storeName);
			setStoreName("");
		} else if (keycode === 13 && storeName === "") {
			console.log("Did not type anything");
			setTimeout(() => {
				setActive(true);
			}, 1000);
			setActive(false);
		}
	};

	return (
		<div>
			<div className="top">
				<h3 className="top--in">Welcome to the NoteBoard , Notes taking app</h3>
			</div>
			<div className="bottom">
				<div className="bottom--in">
					<label htmlFor="" className="bottom--name">
						Name:
					</label>
					<input
						value={storeName}
						type="text"
						className="bottom--value"
						placeholder="Welcome, please enter your name"
						onChange={changeHandler}
						onKeyPress={enterPressed}
					/>
					<p className={active ? "notempty" : "notempty-active"}>
						Name can't empty
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
