import classes from './Card.module.css';

function Card(props)
{
    return (
   <div className={classes.card}>{props.children}</div>
/*here children will hold the jsx elements under wrapper <Card>....</Card> 
in the meetupitem.js
*/       
    );
}
export default Card;