import React from 'react';

const Note = ({note}) => {
    const playNote = (note) => {
        document.getElementById(note).play();
      };
    
      const stopNote = (note) => {
          document.getElementById(note).pause();
      };

  return (
    <div>
        <button onMouseDown={() => playNote(note.id)} onMouseUp={() => stopNote(note.id)} onMouseLeave={() => stopNote(note.id)}>
        {note.note}
      </button>
      <audio src={note.src} loop id={note.id}></audio>
    </div>
  )
}

export default Note;