/**
 * Life-cycle of a Components has 3 three phases/steps:
 * example of class components:
 * 1. Mounting(Birth): Create a component and render() and ready
 * 2. Update(growth/change): change or updating something inside component
 * 3. Unmounting(Death): when the component is finished to render or process
 */
import { Component } from "react";
import axios from "axios";
export default class LifeCycleTest extends Component {
    // 1. method
    constructor() {
        super()
        // state data
        this.state = {
            user: ''
        }
    }
    // update data onloading of rendering data
    // onloan show me REST API
    // 3. method
    componentDidMount() {
        setTimeout(()=> {
            let apiLink = "https://jsonplaceholder.typicode.com/users/1";
            axios.get(apiLink)
            .then((response)=> {
                this.setState({
                    user: response.data
                })
            })
        }, 1000)
    }
    // 2.method
    render() {
        return(
            <div>
               <h1>User Data:</h1>
               <ul>
                   <li>User Name: {this.state.user.name}</li>
                   <li>User email: {this.state.user.email}</li>
                   <li>User website: {this.state.user.website}</li>
               </ul>
            </div>
        )
    }
}