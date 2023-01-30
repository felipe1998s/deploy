import './App.css';
import {Landing,Home,Form,Detail} from './views';
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
import NotFound from './views/NotFound/NotFound';
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://deploy-production-4074.up.railway.app/";
//Henry Pokemon
function App() {

  const location=useLocation();
  console.log(location);
  
  return (
    <div className="App">
      {/* <div className="felipe">{(location.pathname!=="/") && <NavBar></NavBar> }</div> */}
      <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path ="/home" render={()=><Home/>}></Route>
            <Route exact path ="/create" component={Form}></Route>
            <Route exact path ="/pokemon/:name/:id" component={Detail} ></Route>
            <Route path='*' component={NotFound} ></Route>
          </Switch>
          {/*https://bobbyhadz.com/blog/react-router-not-found-page
           https://es.stackoverflow.com/questions/491952/la-ruta-de-error404-en-react-router-dom-aparece-en-todas-las-rutas*/ }
      </Router>
      
    </div>
  );
}

export default App;
