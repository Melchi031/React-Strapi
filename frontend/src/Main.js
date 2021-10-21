import { Switch, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import ListeDesRecettes from './Pages/ListeDesRecettes';
import Recette from './Pages/Recette';

//import Home from '../pages/Home';
//import Signup from '../pages/Signup';

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Accueil}></Route>
      <Route exact path="/recettes" component={ListeDesRecettes}></Route>
      <Route exact path="/recettes/:id" component={Recette}></Route>
    </Switch>
  );
};

export default Main;
