import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { addSong } from "../actions";
// import classNames from 'classnames';

class AddSong extends Component {
    warningRef = createRef()
    state = {
        title: '',
        description: ''
        // ,
        // active:true
    }
    // constructor(){
    //     super()
    //     this.formData = React.createRef()
    // }

    // addSong=(event)=>{
    //     event.preventDefault()
    //     let songInfo = {
    //         title: this.formData.current.title.value,
    //         description: this.formData.current.description.value
    //     };
    //     // console.log(songInfo)
    //     this.props.addSong(songInfo)
    // }
    addNewSong = () => {
        if (this.state.title.trim() !== '' && this.state.description.trim() !== '') {
            const findSong = this.props.songs.find(song => song.title === this.state.title)
            if (findSong) {
                // this.setState({active:false})
                this.warningRef.current.classList.remove('d-none')
            }
            else {
                this.warningRef.current.classList.add('d-none')
                this.props.addSong(this.state)
            }
        }
        this.setState({ title: '', description: '' })
    }
    render() {
        // let classes=classNames('alert alert-danger',{'d-none':this.state.active})
        return (
            // <form onSubmit={this.addSong} ref={this.formData}>
            <div>
                <div className="form-group col-md-5" >
                    <label>Title</label>
                    <input type="text" className="form-control" value={this.state.title} name='title' id="title" onChange={(e) => {
                        this.setState({ title: e.target.value })
                    }} />

                </div>
                <div className="form-group col-md-5">
                    <label>Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name='description' value={this.state.description} onChange={(e) => {
                        this.setState({ description: e.target.value })
                    }} rows="3"></textarea>
                </div>
                <div ref={this.warningRef} className='alert alert-danger d-none' role="alert">
                    The Song is already exist
                </div>
                <button onClick={this.addNewSong} className="btn btn-primary">Add</button>
            </div>
            // </form>
        )
    }
}
const mapStateToProps = (state) => {
    return ({

        songs: state.songs
    })
}
export default connect(mapStateToProps, { addSong })(AddSong)