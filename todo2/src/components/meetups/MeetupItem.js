import classes from './MeetupItem.module.css';

function MeetupItem(props)
{
return(
<li>
<div>
    <img src={props.image} alt={props.title}> </img>
</div>
<div>
<h3>{props.title}</h3>
<address>{props.adress}</address>
<p>{props.description}</p>
</div>
<div>
    <button>to favourite</button>
</div>
</li>
);
}
export default MeetupItem;