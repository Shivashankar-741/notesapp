import React from "react";
import { NameContext } from "../State/NameContext";

const Notes = () => {
	const [name] = React.useContext(NameContext);

	return (
		<div>
			<h1>welcome {name}</h1>
		</div>
	);
};

export default Notes;
