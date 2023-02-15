import React, { useState } from 'react';
import './eva.css'

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const handleRecordClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    if (!mediaRecorder) {
      const recorder = new MediaRecorder(stream);
      recorder.addEventListener('dataavailable', handleDataAvailable);
      recorder.start();
      setMediaRecorder(recorder);
    } else {
      mediaRecorder.start();
    }
  };

  const stopRecording = () => {
    mediaRecorder.stop();
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioChunks((chunks) => [...chunks, event.data]);
    }
  };

  const audioURL = URL.createObjectURL(new Blob(audioChunks));

  return (
    <div className="container">
      <button onClick={handleRecordClick}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <audio src={audioURL} controls />
    </div>
  );
}

export default AudioRecorder;
