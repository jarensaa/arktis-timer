import React, {useState} from 'react';
import './App.css';

var dueDate = new Date(2019, 10, 28, 12);

function App() {

  const [time, setTime] = useState(getTimeToDueDate())

  setInterval(() => {
      setTime(getTimeToDueDate())
  }, 500);

  return (
    <div className="App">
      <div className="App-box">
        <a>
          <a className="big-text">
            {DateDiff.inDays(time)}
          </a>
          <a className="annotation-text">
            dager
          </a>
        </a>
        <a>
          <a className="small-text">
            {DateDiff.inHours(time)}
          </a>
          <a className="annotation-text">
            timer
          </a>
        </a>
        <a>
          <a className="small-text">
            {DateDiff.inSeconds(time)}
          </a>
          <a className="annotation-text">
            sekunder
          </a>
        </a>
      </div>
    </div>
  );
}

function getTimeToDueDate() {
  return dueDate - Date.now();
}

var DateDiff = {
  inDays: (date) => {
      return parseInt(date/(24*3600*1000));
  },
  inHours: (date) => {
    return parseInt(date/(3600*1000));
  },
  inSeconds: (date) => {
    return parseInt((date)/(1000));
  }
}

export default App;