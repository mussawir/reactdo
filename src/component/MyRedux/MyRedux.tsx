import React, { useEffect, useState } from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import {NotesState} from "../../reducers/notesReducer";
import { addNote } from "../../actions";
import {store} from '../../store'
import { log } from "console";


function MyRedux(){
//   const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
// const dispatch = useDispatch()
// const addNote = (note:string) =>{
// dispatch({type: "ADD_NOTE", payload: note})
// } 

// return(
// <>
//   <NewNoteInput addNote={}/>
// <hr/>
// <ul>
//   {notes.map((note)=>{
//  return <li key={note}>{note}</li>
//   })}
 
// </ul>
// </>  
// );
const notes = useSelector<NotesState, NotesState["notes"]>(
  (state) => state.notes
);

const dispatch = useDispatch();

const onAddNote = (note: string) => {
  dispatch(addNote(note));
};

console.log("Store Data",notes)

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

export default MyRedux;