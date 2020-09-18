import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    NavLink
  } from 'react-router-dom';
import Adminboard from '../Adminboard/Adminboard';
function App() {

  return (
      <Router>
           <Adminboard/>
      </Router>
   
  );
}

export default App;
