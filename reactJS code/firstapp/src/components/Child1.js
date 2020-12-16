import { Component } from "react";


export default class Child1 extends Component {
  
    changeColor = (color)=> {
        this.props.bGColor(color)
    }
    render() {
        return (
            <div style={this.props.dataFromParent}>
                <button type="button" onClick={()=>this.changeColor('green')} className="btn btn-success mr-2">Green</button>
                <button type="button" onClick={()=>this.changeColor('yellow')} className="btn btn-warning mr-2">Yellow</button>
                <button type="button" onClick={()=>this.changeColor('red')} className="btn btn-danger">Red</button>
            </div>
        )
    }
}

// export default class Child1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             firstName: 'Ricky',
//             lastName: '', // no idea about father
//             money: 0
//         }
//     }
//     changeChild = ()=> {
//         this.setState({
//             lastName: this.props.dataFromParent.lastName
//         })
//     }
//     // ask parent to give money
//     getMoney = ()=> {
//         let howmuch = 2000
//         // send data(howmuch) from Child1 to Parent
//         this.props.askForMoney(howmuch);
//         // update child data
//         this.setState({
//             money: howmuch
//         })
//     }
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h2>
//                     Child name from Child1 component: {this.state.firstName}  {this.state.lastName} and He has {this.state.money} Euros
//                 </h2>
//                 <button type="button" onClick={this.changeChild} className="btn btn-danger">
//                     Get data from Parent
//                 </button>
//                 <button type="button" onClick={this.getMoney} className="btn btn-success">
//                     Get Money from Parent(child to Parent)
//                 </button>
//             </div>
//         )
//     }
// }
