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

  return (
    <div>
      <img src={playing ? note.activeImg : note.defaultImg} alt="Music Note" style={{cursor: 'pointer'}} />
      <audio src={note.src} loop id={note.id} className='audio'></audio>
    </div>
  )
}

export default Note;