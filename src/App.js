import React from "react";
import Countdown from "./countdown/Countdown";
import "./App.css";
import MqttTile from "./mqttTile/MqttTile";
import mqtt from "mqtt";
import BeerCountdown from "./beer-timer/Beercountdown";

const client = mqtt.connect("mqtts://antarktis.flyktig.no:4200");

function App() {
  return (
    <div className="App">
      <Countdown />
      <MqttTile
        mqttclient={client}
        topic="temperature"
        description="Inside temp"
        formater={tempString => {
          return parseInt(tempString.split(" ")[1]) + "°";
        }}
        name="temp-tile"
      />
      <MqttTile
        mqttclient={client}
        topic="humidity"
        description="Humidity"
        formater={tempString => {
          return parseInt(tempString.split(" ")[1]);
        }}
        name="humidity-tile"
      />
      <MqttTile
        mqttclient={client}
        topic="pressure"
        description="Pressure"
        formater={tempString => {
          return parseInt(tempString.split(" ")[1]);
        }}
        name="pressure-tile"
      />
      <MqttTile
        mqttclient={client}
        topic="outsidetemp"
        description="Outside temp"
        formater={tempString => {
          return tempString.split(" ")[1] + "°";
        }}
        name="outside-temp-tile"
      />
      <BeerCountdown />
    </div>
  );
}

export default App;
