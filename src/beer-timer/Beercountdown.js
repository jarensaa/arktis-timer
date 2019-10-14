import React, { useState, useEffect } from "react";
import "./Beercountdown.css";

function BeerTimer() {
  const [timeAtChange, setTimeAtChange] = useState(() =>
    getTimeAtBeerSaleChange(new Date())
  );
  const [remainingTime, setRemainingTime] = useState(timeAtChange - Date.now());
  const [isOpen, setIsOpen] = useState(() => isBeersaleOpen(new Date()));
  const [currentTime, setCurrentTime] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentTime > timeAtChange) {
      setTimeAtChange(getTimeAtBeerSaleChange(new Date()));
    } else {
      setRemainingTime(timeAtChange - currentTime);
    }
  }, [currentTime, timeAtChange]);

  useEffect(() => {
    setRemainingTime(timeAtChange - Date.now());
    setIsOpen(isBeersaleOpen(new Date()));
  }, [timeAtChange]);

  return (
    <div className="beer-timer box">
      <div>
        <div>Ølsalget {isOpen ? "stenger" : "åpner"} om</div>
        <div className="beer-big-text">{Time.formated(remainingTime)}</div>
      </div>
    </div>
  );
}

function isBeersaleOpen(timeNow) {
  const weekDayToday = timeNow.getDay();
  const hour = timeNow.getHours();

  if (weekDayToday === 0) {
    return false;
  }

  if (weekDayToday === 6) {
    return hour >= 9 && hour < 18;
  }

  return hour >= 9 && hour < 20;
}

function getTimeAtBeerSaleChange(timeNow) {
  const weekDayToday = timeNow.getDay();
  var beerSaleChangesAtTime;

  if (isBeersaleOpen(timeNow)) {
    beerSaleChangesAtTime = new Date(
      timeNow.getFullYear(),
      timeNow.getMonth(),
      timeNow.getDate(),
      20
    );

    if (weekDayToday === 5) {
      beerSaleChangesAtTime.setHours(18);
    }
  } else {
    beerSaleChangesAtTime = new Date(
      timeNow.getFullYear(),
      timeNow.getMonth(),
      timeNow.getDate(),
      9
    );

    if (timeNow.getHours() >= 18) {
      beerSaleChangesAtTime.setDate(timeNow.getDate() + 1);
    }

    if (weekDayToday === 5) {
      beerSaleChangesAtTime.setDate(timeNow.getDate() + 2);
    }
  }
  return beerSaleChangesAtTime;
}

var Time = {
  formated: date => {
    return (
      Time.inHours(date).toLocaleString(undefined, {
        minimumIntegerDigits: 2
      }) +
      ":" +
      (Time.inMinutes(date) % 60).toLocaleString(undefined, {
        minimumIntegerDigits: 2
      }) +
      ":" +
      (Time.inSeconds(date) % 60).toLocaleString(undefined, {
        minimumIntegerDigits: 2
      })
    );
  },
  inDays: date => {
    return parseInt(date / (24 * 3600 * 1000));
  },
  inHours: date => {
    return parseInt(date / (3600 * 1000));
  },
  inMinutes: date => {
    return parseInt(date / (1000 * 60));
  },
  inSeconds: date => {
    return parseInt(date / 1000);
  }
};

export default BeerTimer;
