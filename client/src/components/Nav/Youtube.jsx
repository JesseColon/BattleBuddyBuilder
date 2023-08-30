import React, { useState } from 'react';

const FloatingCardWithYouTube = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to extract the video ID from a YouTube link
  const getVideoIdFromLink = (link) => {
    const regex = /(?:https:\/\/www\.youtube\.com\/watch\?v=|https:\/\/youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = link.match(regex);
    return match ? match[1] : null;
  };

  // Function to handle playing the YouTube video
  const handlePlayVideo = () => {
    const videoId = getVideoIdFromLink(youtubeLink);
    if (videoId) {
      setYoutubeLink(videoId);
      setIsPlaying(true);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card text-center">
            <div className="card-header">
              YouTube Video Player
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter YouTube Link</h5>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter YouTube link"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
              <button
                className="btn btn-primary mb-3"
                onClick={handlePlayVideo}
              >
                Play Video
              </button>

              {isPlaying && (
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${youtubeLink}?autoplay=1`}
                    title="YouTube Video"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCardWithYouTube;
