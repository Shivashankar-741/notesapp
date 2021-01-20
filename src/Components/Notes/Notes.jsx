import React from "react";
import NotesDetails from "./NotesDetails/NotesDetails";
import NotesList from "./NotesList/NotesList";
import "./Notes.css";

const Notes = () => {
	return (
		<div className="Notes">
			<NotesDetails />
			<NotesList />
		</div>
	);
};

export default Notes;
