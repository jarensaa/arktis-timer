import React, { useState, useEffect } from "react";
import "./Countdown.css";

var dueDate = new Date(2020, 5, 2, 9);

function Countdown() {
  const [time, setTime] = useState(getTimeToDueDate());

  useEffect(() => {
    const interval = setInterval(() => {
      const prevHour = DateDiff.inHours(time);
      const nextHour = DateDiff.inHours(dueDate - Date.now());

      if (prevHour != nextHour) {
        setTime(getTimeToDueDate());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Countdown-box">
      <div>
        <a className="big-text">{DateDiff.inDays(time)}</a>
        &nbsp;dager
      </div>
      <div>
        <a className="small-text">{DateDiff.inHours(time)}</a>
        &nbsp;timer
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
