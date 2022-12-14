import classes from "./MeetupItem.module.css";
import {useState} from 'react';
import Card from "../ui/Card";


function MeetupItem(props) {
    
  return (
    <li className={classes.item}>
        <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>to favourite</button>
      </div>
      <br />
      </Card>
    </li>
   
  );
}
export default MeetupItem;
