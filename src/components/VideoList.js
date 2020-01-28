import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect})=>{

    const renderedList = videos.map((video) => {
        console.log(video)
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
    //props.videos
    return <div className="ui relaxed divided list">{renderedList}</div>

}

export default VideoList;