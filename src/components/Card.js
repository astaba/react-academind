import React from "react";

export default function Card(props) {
  const classes = props.className ? `card ${props.className}` : "card";
  return <div className={classes}>{props.children}</div>;
}
