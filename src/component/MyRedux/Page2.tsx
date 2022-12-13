import React, { useEffect, useState } from "react";
// import {store} from '../../store'
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import {NotesState} from "../../reducers/notesReducer";
import { addNote } from "../../actions";
// import {store} from "../../store"


function Page2(){
// const states = store.getState();
// const notes = states.notes;
// console.log(notes);

const notes = useSelector<NotesState, NotesState["notes"]>(
  (state) => state.notes 
);
console.log(notes);

const dispatch = useDispatch();

const onAddNote = (note: string) => {
  dispatch(addNote(note));
};

return (
  <>
    <NewNoteInput addNote={onAddNote} />
    <hr />
    <ul>
      {notes.map((note) => {
        return <li key={note}>{note}</li>;
      })}
    </ul>
  </>
);

}

export default Page2;