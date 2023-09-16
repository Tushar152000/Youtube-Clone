import React from 'react';

const VideoCard = ({ info }) => {
const{snippet,statistics}=info;
const{channelTitle,title,thumbnails}=snippet;

  return (
    <div className='p-3 m-3 w-72 shadow-lg rounded-lg'>
    
    <img className='rounded-lg hover:rounded-none' alt='frame' src={thumbnails.medium.url}/>
    <ul>
      <li className='font-bold'>{title}</li>
      <li>{channelTitle}</li>
      <li>{(statistics.viewCount / 1000000).toFixed(1) + 'M'} Views</li>

    </ul>
    </div>
  );
};

export default VideoCard;
