import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <li onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div>{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoItem;
