import { Component } from "react";
import { connect } from "react-redux";
import { selectSong, deleteSong } from "../actions";

class SongsList extends Component {
    btnSelectClick = (song) => {
        this.props.selectSong(song)
    }
    btnDeleteClick = (song) => {
        this.props.deleteSong(song)
    }
    render() {
        const songsItems = this.props.songs.map((song, index) => {
            return <li key={index} className='list-group-item'>
                {song.title}

                <button onClick={() => { this.btnSelectClick(song) }} className='btn btn-primary float-right'>
                    show
            </button>
                <button onClick={() => { this.btnDeleteClick(song) }} className='btn btn-danger float-right'>
                    Delete
            </button>
            </li>
        })
        return (
            <div className='col-md-5'>
                <ul className='list-group'>
                    {songsItems}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return ({

        songs: state.songs
    })
}

export default connect(mapStateToProps, { deleteSong, selectSong })(SongsList)