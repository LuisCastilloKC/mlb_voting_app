import React from 'react';
import PollsContainer from './PollsContainer'
import  { Navbar }  from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/polls" exact component={PollsContainer} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;