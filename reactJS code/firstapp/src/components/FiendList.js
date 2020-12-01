import { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
// import components from react-bootstrap
class FriendList extends Component{
    constructor() {
        super();
        // state data
        this.state = {
            // friends
            friend_name:[], // default value
        }
    }
    // handler name: addFriend()
    addFriend = (event)=> {
        //alert(1)
        event.preventDefault()
        let f_name = event.target.f_name.value;
        // push f_name into friends array[]
        // update the state
        this.setState((prevState)=> {
            return {
                // friends: new pushed array
                friend_name:prevState.friend_name.concat(f_name)
            }
        })
    }
    render() {
        return(
            <div>
            <Form onSubmit={this.addFriend}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Friend Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="f_name"/>
                </Form.Group>
                <Button variant="success" type="submit">Add+</Button>
            </Form>
            <ListGroup>
                {this.state.friend_name.map((friend ,index)=>{
                    return <ListGroup.Item key={index}>{friend}</ListGroup.Item>
                })}
                
            </ListGroup>
            </div>
        )
    }
}
export default FriendList;