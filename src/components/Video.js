import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utilis/constant';
import VideoCard from './VideoCard';

import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Video = () => {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);

  };

  if(Videos.length===0)
  {
    return <Shimmer></Shimmer>
  }

  return (
    <div className='flex flex-wrap justify-center '>
      {Videos.map(Videos=> (
        <Link to={"/watch?v="+ Videos.id}>
       <VideoCard key={Videos.key} info={Videos}/>
       </Link>
      ))};

    </div>
  );
};

export default Video;
