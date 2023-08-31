import React from "react";

const FloatingCard = () => {
  return (
    <div className="floating-card">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Featured Videos</h5>
          <div className="video-grid">
            <div className="video-item">
              <iframe
                src="https://www.youtube.com/embed/Zyt2GKb6qWw"
                title="Video 1"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-item">
              <iframe
                src="https://youtu.be/d722bGusttw?si=sz-IpNVlQUzzK_wb"
               
                title="Video 2"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-item">
              <iframe
                src="https://youtu.be/d722bGusttw?si=YXkjCyT-hpto6yPo"
                title="Video 3"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-item">
              <iframe
                src="https://youtu.be/LA9mX6uxgvM?si=sxZSCUIPOa7aIfR2"
                title="Video 4"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
