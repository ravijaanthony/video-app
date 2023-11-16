import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div className='video-player'>
           <ReactPlayer
               ref={playerRef}
               url="video/moon.mp4"
               width={720}
               height={480}
               controls={true}
           />
      </div>
   )
};
export default PlayerComponent;