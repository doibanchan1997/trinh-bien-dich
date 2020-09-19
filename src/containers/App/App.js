import React from 'react';
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from "./../../redux/configureStore";
import Adminboard from '../Adminboard/Adminboard';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
           <Adminboard/>
      </Router>
    </Provider>
  );
}

export default App;
