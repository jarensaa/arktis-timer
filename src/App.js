import React from "react";
import Countdown from "./countdown/Countdown";
import "./App.css";
import MqttTile from "./mqttTile/MqttTile";
import mqtt from "mqtt";

const client = mqtt.connect("mqtt://antarktis.flyktig.no:4200");

function App() {
  return (
    <div className="App">
      <Countdown />
      <MqttTile
        mqttclient={client}
        topic="temperature"
        description="Temp"
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
    </div>
  );
}

export default App;
