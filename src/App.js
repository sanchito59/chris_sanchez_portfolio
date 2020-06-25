import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch >
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exactpath="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
