import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import NavBar from './components/NavBar';


class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/rooms' component={Rooms} />
                <Route exact path='/rooms/:slug' component={SingleRoom} />
                <Route component={Error} />
                </Switch>
            </>
        );
    }
}

export default App;
