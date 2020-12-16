export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
export const addSong = (song) => {
    return {
        type: 'SONG_ADDED',
        payload: song
    }
}
export const deleteSong = (song) => {
    return {
        type: 'SONG_DELETE',
        payload: song
    }
}