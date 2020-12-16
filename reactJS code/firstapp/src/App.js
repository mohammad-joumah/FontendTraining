import "./main.css";
import Footer from "./components/Footer";
import TopMenu from "./components/TopMenu";
import HookTest from "./components/HookTest";
import { 
  BrowserRouter as Router,
  Route 
        } from "react-router-dom";

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import LifeCycleEX from "./components/LifeCyrcleEx";
import Parent from "./components/Perent";



function App() {
  return (
    <div className="pl-5 pr-5">
      <TopMenu/>
      <Router>
        <Route path="/" exact><Parent/></Route>
        <Route path="/profile"><Profile/> </Route>
        <Route path="/dashboard"><LifeCycleEX/> </Route>
      </Router>
      
    </div>
    );
}

export default App;


// testing Component
// function Home(){
//   return <h1>Home page</h1>
// }

function Profile(){
  return <h1>Profile page</h1>
}

// function Dashboard(){
//   return <h1>Dashboard page</h1>
// }
