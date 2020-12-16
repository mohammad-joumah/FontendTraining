import React, { Component } from "react";
import { Form, Button, ListGroup, Container } from "react-bootstrap";
// import components from react-bootstrap
class Contact extends Component {
    constructor() {
        super();
        this.formData = React.createRef()

        // state data
        this.state = {
            userName:'',
            subject:'',
            msg:''
        }
    }
    // handler name: addFriend()
    addTask = (event) => {
        //alert(1)
        event.preventDefault()
        
        let formData = this.formData
            
         // upsubject the state
        this.setState(() => {
            
            return {
                userName: formData.current.userName.value,
                subject: formData.current.subject.value,
                msg: formData.current.msg.value
            }
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <Container className="col-10 m-auto">
                    <Form onSubmit={this.addTask} ref={this.formData}>
                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text"  name="userName" />
                        </Form.Group>
                        <Form.Group controlId="formBasicsubject">
                            <Form.Label>subject</Form.Label>
                            <Form.Control type="text" name="subject" />
                        </Form.Group>
                        <Form.Group controlId="formBasicmsg">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="msg" />
                        </Form.Group>
                        <Button variant="success" type="submit">Add+</Button>
                    </Form>
                    <ListGroup>
                    <h2>{this.state.userName}</h2> 
                    <h2>{this.state.subject}</h2> 
                    <p>{this.state.msg}</p> 
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default Contact;