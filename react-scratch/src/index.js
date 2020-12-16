import React from "react";
import ReactDome from "react-dom";
// redux dependencies
import { Provider } from "react-redux";
import { createStore } from "redux";

// import reducers
import reducers from "./reducers";
// import songsList component
import SongsList from "./components/SongsList";
import SongsDetails from "./components/SongDetails";
import AddSong from "./components/AddSong";
class App extends React.Component {
    render() {
        return (
            <div className='container border border-secondary p-2'>
                <div className='row'>
                    <SongsList />
                    <SongsDetails />
                </div>
                <AddSong />
            </div>
        )
    }
}

ReactDome.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root'))