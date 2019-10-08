import React, { useState, useEffect } from "react";
import "./MqttTile.css";

const MqttTile = props => {
  const client = props.mqttclient;
  const [value, setValue] = useState("");

  const subsciptionTopic = props.topic;

  useEffect(() => {
    client.on("connect", () => {
      client.subscribe(subsciptionTopic);
    });

    client.on("message", (topic, message) => {
      if (topic == subsciptionTopic) {
        setValue(props.formater(message.toString()));
      }
    });
    return () => {};
  }, []);

  return (
    <div className={props.name + " box"}>
      <div>{props.description}</div>
      <div className="textbox">{value}</div>
    </div>
  );
};

export default MqttTile;
