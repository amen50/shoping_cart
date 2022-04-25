import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from'react-router-dom';


const hats = () => (
      <div>
         <h1>HAts pages</h1>
      </div>
);



function App() {
  return (
    <div>
      
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={hats}/>
      </Switch>
    </div>
  );
}

export default App;
