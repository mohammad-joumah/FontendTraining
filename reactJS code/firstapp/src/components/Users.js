import React,{ Component } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
export default class Users extends Component {
    constructor() {
        super()
        this.detal=React.createRef();
        this.state = {
            users: [],
            show: false,
            user: {}
    }
}
    // onloan show me REST API
    //when component is start and ready(mounting) then run this method
    componentDidMount() {
        setTimeout(()=> {
            let apiLink = "https://jsonplaceholder.typicode.com/users"
            axios.get(apiLink)
                .then((response) => {
                    this.setState({
                        users: response.data, // updating user
                    })
                })
            }, 1000)
    }
    // delete user
    deleteUser = (e)=> {
        let arrayIndex = e.target.value;
        this.state.users.splice(arrayIndex, 1);
        this.setState(this.state.users)
    }
    handleShow = (index)=> {
        
        // let indexNum=this.detal.current.value
        this.setState({
            show: true,
            user: this.state.users[index]
        })
    }
    handleClose = ()=> {
        this.setState({
            show: false
        })
    }
    render() {
        // console.log(this.state.users);
        return (
            <>
                
                {
                   this.state.users.map((user, index)=> {
                       return (
                           <tr key={index}>
                               <td>
                                   {user.name}
                               </td>
                               <td>
                                   {user.username}
                               </td>
                               <td>
                                   {user.email}
                               </td>
                               <td>
                                   {user.phone}
                               </td>
                               <td>
                                   {user.website}
                               </td>
                               <td>
                                   {user.address.street}
                               </td>
                               <td>
                                   {user.company.name}
                               </td>
                               <td>
                                   {user.id}
                               </td>
                               <td>
                            <Button variant="primary" onClick={()=>this.handleShow(index)} >
                                Detail
                            </Button>
                                   <button type="button" className="btn btn-success" value={index} onClick={this.deleteUser}>
                                       Delete
                                   </button>
                                   
                               </td>
                           </tr>
                       )
                   })
                }
                {   this.state.show &&
                    <Modal animation={false} show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.state.user.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>User Name:</h5>
                        {this.state.user.username}
                        <h5>User Address:</h5>
                        {this.state.user.address.street}
                        <h5>User Phone:</h5>
                        {this.state.user.phone}
                        <h5>User Website:</h5>
                        {this.state.user.website}
                        <h5>User Company:</h5>
                        {this.state.user.company.name}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                }
            </>
        )
    }
}