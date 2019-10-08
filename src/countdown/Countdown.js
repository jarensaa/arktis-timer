import React, { useState, useEffect } from "react";
import "./Countdown.css";

var dueDate = new Date(2019, 10, 28, 11);

function Countdown() {
  const [time, setTime] = useState(getTimeToDueDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeToDueDate());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Countdown-box">
      <div>
        <a className="big-text">{DateDiff.inDays(time)}</a>
        dager
      </div>
      <div>
        <a className="small-text">{DateDiff.inHours(time)}</a>
        timer
      </div>
      <div>
        <a className="small-text">{DateDiff.inSeconds(time)}</a>
        sekunder
      </div>
    </div>
  );
}

function getTimeToDueDate() {
  return dueDate - Date.now();
}

var DateDiff = {
  inDays: date => {
    return parseInt(date / (24 * 3600 * 1000));
  },
  inHours: date => {
    return parseInt(date / (3600 * 1000));
  },
  inSeconds: date => {
    return parseInt(date / 1000);
  }
};

export default Countdown;
