import React, { Component } from "react";

class FloatingVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentVideo: null, // Index of the currently selected video (null when none is selected)
      videoUrls: [
        "https://www.youtube.com/embed/Zyt2GKb6qWw",
        
      ],
    };
  }

  playVideo = () => {
    this.setState({ isPlaying: true });
  };

  stopVideo = () => {
    this.setState({ isPlaying: false });
  };

  switchVideo = (index) => {
    this.setState({ currentVideo: index });
  };

  closeFloatingSection = () => {
    this.props.onClose(); // Assuming you pass a function to close the section as a prop
  };

  render() {
    const { isPlaying, currentVideo, videoUrls } = this.state;
    const videoUrl = videoUrls[currentVideo];

    return (
      <div className="floating-section">
        <div className="close-button" onClick={this.closeFloatingSection}>
          
        </div>

        <div className="video-grid">
          {videoUrls.map((url, index) => (
            <div className="video-item" key={index}>
              <iframe
                id={`youtubeVideo${index}`}
                width="560"
                height="315"
                src={isPlaying && currentVideo === index ? `${url}?autoplay=1` : url}
                frameBorder="0"
                allowFullScreen
                title={`YouTube Video ${index + 1}`}
              ></iframe>
              {/* <button onClick={() => this.switchVideo(index)}>
                Play Video {index + 1}
              </button> */}
            </div>
          ))}
        </div>

        {/* <button onClick={this.playVideo}>Play</button>
        <button onClick={this.stopVideo}>Stop</button> */}
      </div>
    );
  }
}

export default FloatingVideo;
