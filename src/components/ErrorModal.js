import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

export default function ErrorModal(props) {
  const handleBackdrop = (e) => {
    if(e.target !== e.currentTarget) return;
    props.hideModal();
  }

  return (
    <div className={classes.backdrop} onClick={handleBackdrop}>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.content}>
          <h4>{props.message}</h4>
        </div>
        <div className={classes.actions}>
          <Button type="button" handleClick={props.hideModal}>Okay</Button>
        </div>
      </Card>
    </div>
  );  
}
