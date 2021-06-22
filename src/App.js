import React from 'react';
import GlobalStyle from './components/globleStyle';
import Homepage from './pages/Hompage';
import { Route, Redirect } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <GlobalStyle />
      <Route path={["/movie/:id", "/"]}>
        <Homepage />
      </Route>
      <Redirect to="/"></Redirect>
    </div>

  );
}

export default App;
