import Card from "../ui/Card";
import classes from './Newmeetupform.js';

function Newmeetupform()
{
return(
    <Card>
        <form className={classes.form}>
        <div className={classes.control}>
        <label>Meetup title</label>    
        <input type="text" required id="title"></input>    
        </div>    

        </form>
       
    </Card>
)
}
export default Newmeetupform;