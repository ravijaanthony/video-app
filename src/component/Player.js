import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// "video/moon.mp4"

import { Layout, Typography } from 'antd';
const {Content } = Layout;


function App() {
   const playerRef = useRef(null);
    return (

    //   <div className='video-player'>
    //        <ReactPlayer
    //            ref={playerRef}
    //         //    url="video/moon.mp4"
    //         //    url="video/rain.mp4"
    //         //    url="video/beach.mp4"
    //            width={720}
    //            height={480}
    //            controls={true}
    //        />
    //    </div>
        <Layout>
            <Content>
                {/* <GridListView/> */}
            </Content>
        </Layout>
       
   )
};

export default App;