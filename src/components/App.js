import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount() {
        this.onTermSubmit('buildings')
    }

    //using FETCH
    // onTermSubmit = async term => {
    //     const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';
    //     const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${KEY}&q=${term}`;
    //
    //     const response = await (await fetch(URL)).json();
    //     this.setState({
    //         videos: response.items,
    //         selectedVideo: response.items[0]
    //     });
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState(
            {videos: response.data.items,
                selectedVideo:response.data.items[0]
            })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}

export default App