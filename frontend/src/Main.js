import { Switch, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';

//import Home from '../pages/Home';
//import Signup from '../pages/Signup';

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      {/* {/* <Route exact path="/" component={Home}></Route> */}
      <Route exact path="/" component={Accueil}></Route>
    </Switch>
  );
};

export default Main;
