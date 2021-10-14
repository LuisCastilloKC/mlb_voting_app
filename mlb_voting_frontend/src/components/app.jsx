import React from 'react';
import PollsContainer from './PollsContainer'
import  { Navbar }  from './Navbar';
import { Home } from './Home';
import { About } from './About';
import  TopPlayers  from './TopPlayers'
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