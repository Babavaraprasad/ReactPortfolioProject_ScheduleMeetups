import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
/*the job is to define the path in the url and 
which component to load for which url.
we have localhost:3000
after deployment in production:my-page.com
with the help of routing we speify
localhost:3000/products
localhost:3000/favorites
*/
import { Routes,Switch } from 'react-router';
import AllMeetup from './pages/AllMeetup';
import Favourite from './pages/Favourite';
import NewMeetuppage from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
  <MainNavigation/>
     <Switch>
     <Route path='/' exact={true}><AllMeetup/></Route>
     <Route path='/new_meetup'>
      <NewMeetuppage/>
     </Route>
     <Route path='/favourites'>
      <Favourite/>
     </Route>
     </Switch>
     
    </div>
  );
}

export default App;
