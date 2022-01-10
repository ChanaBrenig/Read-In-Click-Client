import React from 'react';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Routing from './components/router';


function App() {



  return (
  <DndProvider backend={HTML5Backend}>
    <div>
      <Routing />
    </div>
  </DndProvider>
  );
}
export default App;
