import { Component } from "react";
import { connect } from "react-redux";


class SongsDetails extends Component {
    render() {
        return (

            <div className='col-md-5 col-sm-11 border border-secondary ml-3'>
                <h3>Song Details</h3>
                {this.props.selectedSong ?
                    <>
                        <p>Song Title: {this.props.selectedSong.title}</p>
                        <p>Song Description: {this.props.selectedSong.description}</p>
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
export default connect(mapStateToProps)(SongsDetails);