import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import RouteList from "./RouteList";
import JoblyAPi from './JoblyApi';


const App = () => {

  return (
    <div className="App">
      <RouteList/>
    </div>
  );
}

export default App;
