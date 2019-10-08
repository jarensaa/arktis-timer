import React, {useState, useEffect} from 'react';
import Countdown from './countdown/Countdown';
import "./App.css"

var dueDate = new Date(2019, 10, 28, 12);

function App() {
  return(
    <div className="App">
      <Countdown/>
    </div>
  )
}

export default App;
