import React, { useEffect, useState } from "react";
import {store} from '../../store'
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import {NotesState} from "../../reducers/notesReducer";
import { addNote } from "../../actions";


function Page2(){
const state = store.getState();
const notes = state.notes;
console.log(notes,"data here");
return (
  <>
    {/* <NewNoteInput addNote={onAddNote} /> */}
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