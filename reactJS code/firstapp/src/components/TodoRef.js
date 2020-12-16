import React, { Component } from "react";
import { Form, Button, ListGroup, Table, Container } from "react-bootstrap";
// import components from react-bootstrap
class TodoRef extends Component {
    constructor() {
        super();
        this.formData = React.createRef()

        // state data
        this.state = {

            todoList: [], // default value
        }
    }
    // handler name: addFriend()
    addTask = (event) => {
        //alert(1)
        event.preventDefault()
        // console.log(event.target)
        let formData = this.formData,
            taskInfo = {
                Task: formData.current.task.value,
                date: formData.current.date.value,
                time: formData.current.time.value
            };
        // // push f_name into friends array[]
        this.state.todoList.push(taskInfo)
        // // update the state
        this.setState((prevState) => {
            return {
                // friends: new pushed array
                todoList: prevState.todoList
            }
        })
    }
    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.addTask} ref={this.formData}>
                        <Form.Group controlId="formBasicTask">
                            <Form.Label>The Task</Form.Label>
                            <Form.Control type="text" placeholder="Enter Task" name="task" />
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>date</Form.Label>
                            <Form.Control type="date" name="date" />
                        </Form.Group>
                        <Form.Group controlId="formBasicTime">
                            <Form.Label>The time</Form.Label>
                            <Form.Control type="time" name="time" />
                        </Form.Group>
                        <Button variant="success" type="submit">Add+</Button>
                    </Form>
                    <ListGroup>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.todoList.map((task, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{task.Task}</td>
                                            <td>{task.time}</td>
                                            <td>{task.date}</td>
                                        </tr>


                                        // <ListGroup.Item key={index}>the Task is: {task.Task} in {task.date} at {task.time}</ListGroup.Item>
                                    )
                                })}
                            </tbody>
                        </Table>

                    </ListGroup>
                </Container>
            </div>
        )
    }
}
export default TodoRef;