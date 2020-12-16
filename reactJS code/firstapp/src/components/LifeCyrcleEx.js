import { Component } from "react";
import Users from "./Users";
export default class LifeCycleEX extends Component {
    constructor() {
        super()
        
    }
    // when any change/update is happening with state/props
    componentDidUpdate() {
        console.log('ComponentDidUpdate: State/props updates')
    }
    
    render() {
        return(
            <div>
               <h1>Users Data</h1>
               <table className="table">
                   <thead>
                       <tr>
                           <th>User Name</th>
                           <th>User UserName</th>
                           <th>User Email</th>
                           <th>User Phone</th>
                           <th>User Website</th>
                           <th>User Address</th>
                           <th>User Company</th>
                           <th>User Id</th>
                           <th>Options</th>
                       </tr>
                   </thead>
                   <tbody>
                       <Users/>
                   </tbody>
               </table>
            </div>
        )
    }
}