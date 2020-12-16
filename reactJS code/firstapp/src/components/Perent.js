import { Component } from "react";
import Child1 from "./Child1";
// import Child1 from "./Child1";

export default class Parent extends Component {
    constructor() {
        super();
        this.state = {
            container:{
                width:'fit-content',
                margin:'auto'
            },
            flexContainer: {
                display: 'flex',
                backgroundColor: 'DodgerBlue',
                width:'fit-content'
            },
            subDiv: {
                backgroundColor: '#f1f1f1',
                margin: '10px',
                padding: '20px',
                fontSize: '30px'
              }
        }
    }
    changeBG = (color)=> {
        this.setState({
                subDiv:{
                    ...this.state.subDiv,
                    backgroundColor:color
                }  
        })
    }
    render() {
        return (
            <div style={this.state.container}>
                <div style={this.state.flexContainer}>
                    <div style={this.state.subDiv}>div1</div>
                    <div style={this.state.subDiv}>div2</div>
                    <div style={this.state.subDiv}>div3</div>
                </div>
                <Child1 dataFromParent={this.state.container} bGColor={this.changeBG}/>
            </div>
        )
    }
}


// export default class Parent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             fatherName: 'Peter',
//             lastName: 'Müller',
//             totalMoney: 5000
//         }
//     }
//     // 1. create a callback handler function for children
//     giveTheMoney = (howMuch)=> {
//         this.setState({
//             totalMoney: this.state.totalMoney-howMuch
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Father Name from Parent: {this.state.fatherName} and He has
//                      {this.state.totalMoney}  Euros in his account.
//                 </h1>
//                 <Child1 dataFromParent={this.state} askForMoney={this.giveTheMoney}/>
//             </div>
//         )
//     }
// }