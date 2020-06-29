import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';
import Portfolio from './Pages/Portfolio';
import ScrollToTop from './atoms/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Switch >
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
