import React, { useState } from 'react';

const FloatingCardWithYouTube = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  const presetVideoLinks = [
    'https://youtu.be/Zyt2GKb6qWw?si=urEDuoS0IT6tgyPW',
    'https://youtu.be/d722bGusttw?si=0zJShl5EIiMNrK0f',
    'https://youtu.be/dkVNZY8hoR8?si=j7Sy92ZtCUgjN7C3',
    'https://youtu.be/LA9mX6uxgvM?si=j3_Lb2Y2Bd6adunQ',
    // Add more preset video links as needed
  ];

  const getVideoIdFromLink = (link) => {
    const regex = /(?:https:\/\/www\.youtube\.com\/watch\?v=|https:\/\/youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = link.match(regex);
    return match ? match[1] : null;
  };

  const handlePlayNextVideo = () => {
    if (videoIndex < presetVideoLinks.length - 1) {
      setVideoIndex(videoIndex + 1);
    }
  };

  const handlePlayPreviousVideo = () => {
    if (videoIndex > 0) {
      setVideoIndex(videoIndex - 1);
    }
  };

  const currentVideoId = getVideoIdFromLink(presetVideoLinks[videoIndex]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card text-center">
            <div className="card-header">
              <h2>Season 1 Sample</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title">Current Video</h5>
              <div className="row">
                {presetVideoLinks.map((videoLink, index) => (
                  <div className="col-md-6" key={index}>
                    <iframe
                      className="embed-responsive-item"
                      src={`https://www.youtube.com/embed/${getVideoIdFromLink(videoLink)}?autoplay=0`}
                      title={`YouTube Video ${index + 1}`}
                      allowFullScreen
                      width="100%"
                      height="150"
                    ></iframe>
                  </div>
                ))}
              </div>
              {/* <button
                className="btn btn-primary mx-2 mt-3"
                onClick={handlePlayPreviousVideo}
                disabled={videoIndex === 0}
              >
                Previous Video
              </button> */}
              {/* <button
                className="btn btn-primary mx-2 mt-3"
                onClick={handlePlayNextVideo}
                disabled={videoIndex === presetVideoLinks.length - 1}
              >
                Next Video
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCardWithYouTube;
