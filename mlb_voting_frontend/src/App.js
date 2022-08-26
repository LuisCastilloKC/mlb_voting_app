import React from 'react';
import PollsContainer from './components/PollsContainer'
import  { Navbar }  from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import  TopPlayers  from './components/TopPlayers'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/polls" exact component={PollsContainer} />
                    <Route path="/topplayers" exact component={TopPlayers} />
                    <Route path="/about" exact component={About} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;