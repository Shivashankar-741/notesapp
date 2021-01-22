import React, { useContext } from "react";
import NotesTodoList from "./NotesTodoList";
import NotesProgressList from "./NotesProgressList";
import NotesReviewList from "./NotesReviewList";
import { SetpopupContext } from "../../State/SetpopupContext";
import NotesDoneList from "./NotesDoneList";

const NotesList = () => {
  const [popup] = useContext(SetpopupContext);

  return (
    <div className={popup ? "NotesList--active" : "NotesList"}>
      <NotesTodoList />
      <NotesProgressList />
      <NotesReviewList />
      <NotesDoneList />
    </div>
  );
};

export default NotesList;
