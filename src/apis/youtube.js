import axios from 'axios'
const KEY = 'AIzaSyC-tzASrjGBsdfy680i2CSK6vcDZMtI42o'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type:'video'
    }
});