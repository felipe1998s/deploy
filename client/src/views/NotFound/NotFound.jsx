import { Link } from 'react-router-dom';
import style from "../NotFound/NotFound.module.css";

const NotFound = () => (
  <div className={style.ConteinerNF}>
    <img src="https://www.media.pokekalos.fr/img/site/erreur404.png" alt="pokemon" />
    <h1>404 - Not Found!</h1>
    <h2>The page or file you are looking for cannot be found</h2>
    <h1><Link to="/home" className={style.link}>{"<"} BACK TO HOME</Link></h1>
    
  </div>
);

export default NotFound;