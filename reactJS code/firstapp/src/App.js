import "./main.css";
import Footer from "./components/Footer";
import TopMenu from "./components/TopMenu";

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import FriendList from "./components/FiendList";
import Todo from "./components/Todo";


function App() {
  return (
    <div className="pl-5 pr-5">
      <TopMenu/>
      <FriendList/>
      <Todo/>
      <Footer />
    </div>
  );
}

export default App;
