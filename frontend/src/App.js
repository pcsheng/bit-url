import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Stats from './pages/Stats';
import Redirect from './pages/Redirect';
import HomeButton from './components/HomeButton';
import StatsButton from './components/StatsButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeButton />
        <StatsButton />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route path="/stats" component={Stats} />
          <Route path="/to/:id" component={Redirect} />
        </Switch>
      </div>
    );
  }
}

export default App;
