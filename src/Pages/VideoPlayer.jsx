import React, { useState, useRef, useEffect } from 'react';
import JSZip from 'jszip';
import { IonIcon } from "@ionic/react";
import { pause, play } from "ionicons/icons";

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleZipUrl = async () => {
    setLoading(true);
  const zipUrl="https://storage.googleapis.com/slugplay-314e4.appspot.com/videos/testVideo?GoogleAccessId=firebase-adminsdk-hjkud%40slugplay-314e4.iam.gserviceaccount.com&Expires=1773685800&Signature=YepiZffThYt0nSWYZFdLnpoan1FURWHoC2SNIc%2BU3brnPqMM68tHV5B08tPLXPRlwtNG3647zFyDaLTqN9Se%2BP2CURklBoODRaYjfhW4W9iv5hHxKQ%2FSMWSyXMjLqtBVSRNZJEndxuRXRwAhydUcH2ZqeOnJYcYpUDj7WvtKYt55TvYln9qT2xBdXxJfjMIvdnQqwMm5LHneuwiLiMxvMjVoRv6o%2FLd3Bg7luTe2JhRhklsQ7Os%2BhBwt9gZbOOIDgnL57R76S%2FUefkZPMVs4FwZTOhsJbNrZdnHFLuzAugv5hwfPUV2APbbzVweXcTg%2B3cvKPpkIbolD4Kqbk9rWWw%3D%3D"
    // Fetch the ZIP file from the URL
    const response = await fetch(zipUrl);
    const zipBlob = await response.blob();
  
    // Load the ZIP file using JSZip
    const zip = await JSZip.loadAsync(zipBlob);
  
    let videoBlob = null;
  
    // Iterate through the ZIP file contents
    for (const relativePath in zip.files) {
      if (relativePath.endsWith('.mp4')) { // Assuming the video file is an mp4
        const fileData = await zip.files[relativePath].async('blob');
        videoBlob = fileData;
        // console.log(videoBlob);
        break;
      }
    }
  
    if (videoBlob) {
      const videoUrl = URL.createObjectURL(videoBlob);
      console.log(videoUrl);
      setVideoSrc(videoUrl);
    } else {
      alert('No video file found in the zip.');
    }
  
    setLoading(false);
  };
  useEffect(() => {
   handleZipUrl()
  }, [])
  
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setVideoStatus(false);
    } else {
      videoRef.current.pause();
      setVideoStatus(true);
    }
  };

  const handleVolumeChange = (event) => {
    videoRef.current.volume = event.target.value;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime / 60);
    console.log(videoRef.current.currentTime / 60);

    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
    // console.log(videoRef.current.duration);¯
  };

  const handleProgressChange = (event) => {
    const seekTime = (videoRef.current.duration / 100) * event.target.value;
    videoRef.current.currentTime = seekTime;

  };

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowOverlay(false);
    }, 3600);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.addEventListener('loadedmetadata', () => {
        setDuration(videoRef.current.duration);
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);
  console.log("currentTime",currentTime);
  console.log("duration",duration); 

  return (
    <div className="w-screen h-screen p-10 bg-black flex items-center justify-center">
      {/* <input
        type="file"
        accept=".zip"
        onChange={handleFileUpload}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="mb-4 p-2 border rounded-lg shadow-sm cursor-pointer text-white">
        Upload Video ZIP
      </label> */}
      {loading ? (
        <p className="text-lg text-white">Loading video...</p>
      ) : (
        videoSrc && (
          <div
            className="relative w-full h-full"
            onMouseMove={handleMouseEnter}
            onMouseOver={handleMouseLeave}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full rounded-lg"
              controls={false}
            />
            <div className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-between transition-opacity duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}>
              <div className='flex flex-row text-white gap-5 top-2 relative items-center justify-center'>
                <h1 className=' absolute top-9 capitalize text-[20px] font-bold w-[10vw]'>Video Name</h1>
              </div>
              <button
           
                onClick={handlePlayPause}
                className="text-white absolute top-[40%]"
              >
                <IonIcon className='text-8xl' icon={videoStatus ? play : pause} />
              </button>
              <div className='flex flex-col bottom-1 relative w-full  px-24 text-white'>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full"
                />
                <p className='text-left'> {currentTime.toFixed(2)} / {(duration).toFixed(2)}</p>


              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default VideoPlayer;
