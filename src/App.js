import React from 'react';
import GlobalStyle from './components/globleStyle';
import Homepage from './pages/Hompage';
import Navbar from './components/Nav';
import { Route, Redirect } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Route path={["/movie/:id", "/"]}>
        <Homepage />
      </Route>
      <Redirect to="/"></Redirect>
    </div>

  );
}

export default App;
