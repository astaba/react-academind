import React from "react";
import Card from "./Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.list.map((item) => (
          <li key={item.id}>{`${item.name} (${item.age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
}
