import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';
import { 
  BrowserRouter as Router,
  
  Route 
        } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <div className="container">
     <Router>
     <TopMenu/>
     <Route path="/" exact><Home/></Route>
     <Route path="/contact"><Contact/> </Route>
     <Route path="/about"><AboutMe/> </Route>
     </Router>
    </div>
  );
}

export default App;
