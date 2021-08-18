import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
//componets
import GlobalStyle from './components/globleStyle'; // style
import Homepage from './pages/Hompage';
import Navbar from './components/Nav';
import Upcomming from './pages/Upcomming';
import Search from './components/search';
import About from './pages/About';

function App() {
  return (

    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/upcomming" ><Upcomming /></Route>
        <Route exact path="/about"><About /></Route>
        <Route path={["/movie/:id", "/"]}> <Homepage /></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>

  );
}

export default App;
