import React, { createContext, useState } from "react";

export const SetpopupContext = createContext();

export const SetpopupProvider = (props) => {
	const [popup, setPopup] = useState(true);

	return (
		<SetpopupContext.Provider value={[popup, setPopup]}>
			{props.children}
		</SetpopupContext.Provider>
	);
};
