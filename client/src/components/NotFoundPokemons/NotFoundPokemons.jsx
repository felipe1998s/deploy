import style from "../NotFoundPokemons/NotFoundPokemons.module.css";

const NotFoundPokemons = () => (
  <div className={style.ConteinerNF}>
    <img src="https://www.media.pokekalos.fr/img/site/erreur404.png" alt="pokemon" />
    <h1>404 - Not Found!</h1>
    <h2>Pokemons Not Found.</h2>
  </div>
);

export default NotFoundPokemons;