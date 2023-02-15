import './eva.css'
import React, { useState } from 'react';

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordClick = () => {
    setIsRecording(!isRecording);
    // TODO: implement logic for recording audio here
  };

  return (
    <div>
      <button onClick={handleRecordClick}>
        {isRecording ? 'Stop Talking' : 'Start Talking'}
      </button>
      <p>Text output goes here</p>
    </div>
  );
}

export default AudioRecorder;
