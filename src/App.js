import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dasboard from './components/dashboard/Dasboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Dasboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
