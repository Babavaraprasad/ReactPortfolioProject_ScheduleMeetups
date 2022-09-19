import Card from "../ui/Card";
import classes from "./Newmeetup.module.css";

function Newmeetupform() {
   
   //javascript functions
   function submitclicked(event)
   {
   event.preventDefault();
   
   } 

  return (
    <Card>
      <form className={classes.form} onSubmit={submitclicked}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup title</label>
          <input type='text' required id='title'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup image</label>
          <input type='url' required id='image'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Adress</label>
          <input type='text' required id='address'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5'></textarea>
        </div>
        <div className={classes.actions}>
           <button>Add meetup</button> 
        </div>
      </form>
    </Card>
  );
}
export default Newmeetupform;
/*In form we have onsubmit which actually submits a http request 
when a button is clicked automatically
*/

/* to prevent the refreshing the page when a button is clicked and 
form is submitted we use an event as an object and it has a preventDefault()
method available in vanilla javscript
*/