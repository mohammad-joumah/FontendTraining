import { Component } from "react";
import { connect } from "react-redux";
import { addSong , editSong,selectSong} from "../actions";

class SongsDetails extends Component {

    state = {
        description: ''
    }

    editeSongClick = () => {
        const saveSong={
            title:this.props.selectedSong.song.title,
            description:this.state.description
        }
        this.props.editSong(saveSong)
        this.props.selectSong({
            song:saveSong,
            edit:false
        })
    }

    render() {
        return (
            <div className='col-md-5 col-sm-11 border border-secondary ml-3'>
                <h3>Song Details</h3>
                {this.props.selectedSong ?
                    <>
                        <p>Song Title: {this.props.selectedSong.song.title}</p>

                        {this.props.selectedSong.edit ?

                            <p><div class="input-group mb-2">
                                <label className="input-group-text">Song Description:</label>
                                <input type="text" className="form-control " onChange={(e) => { this.setState({ description: e.target.value }) }} placeholder='Enter the Description' name='title' id="title" />
                                <div class="input-group-prepend">
                                    <button onClick={this.editeSongClick} className="btn btn-primary float-right">save</button>
                                </div>
                            </div>
                            </p>

                            :
                            <p>Song Description: {this.props.selectedSong.song.description}</p>
                        }

                    </>
                    :
                    <div className="alert alert-info" role="alert">
                        No Song had selected
                </div>
                }

            </div>)
    }
}
const mapStateToProps = (state) => {
    return ({
        selectedSong: state.selectedSong
    })
}
export default connect(mapStateToProps, { addSong ,editSong,selectSong})(SongsDetails);