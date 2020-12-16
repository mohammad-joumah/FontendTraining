import { combineReducers } from "redux";

let songsList = [
    { title: '1973', description: 'song by James Blunt' },
    { title: 'Girl Like You', description: 'song by Maron 5' },
    { title: 'Hello', description: 'song by Adel' }
];

const songsReducer = (songs = songsList, action) => {
    if (action.type === 'SONG_ADDED') {
        songsList.push(action.payload)
        return [...songsList]
    }
    if (action.type === 'SONG_DELETE') {
        songsList = songsList.filter(song => song.title !== action.payload.title)
        return songsList
    }
    return songs;
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED')
        return action.payload;
    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})