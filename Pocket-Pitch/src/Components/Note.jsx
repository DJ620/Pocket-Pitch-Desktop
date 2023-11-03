import React, { useState, useEffect } from 'react';
import "@fontsource/poppins/700.css";

const Note = ({ note, loop, currentNote, playNote }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (currentNote == note.id && playNote) {
      setPlaying(true);
    } else {
      setPlaying(false);
    };
  }, [currentNote, loop, playNote]);

      const noteBtn = {
        height: '50px',
        width: '50px',
        borderRadius: '50px',
        color: playing ? 'white' : 'red',
        fontWeight: '700',
        background: playing ? 'none' : 'white',
        backgroundImage: playing ? 'linear-gradient(pink, red)' : 'none',
        cursor: 'pointer',
        marginRight: '10px'
      }

  return (
    <div>
        <button style={noteBtn}>
        {note.note}
      </button>
      <audio src={note.src} loop id={note.id} className='audio'></audio>
    </div>
  )
}

export default Note;