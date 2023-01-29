import CardsConteiner from "../../components/CardsConteiner/CardsConteiner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByTypes, getPokemons } from "../../redux/actions";
import style from "./Home.module.css";
import FilterConteiner from "../../components/FiltersConteiner/FiltersConteiner";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";


const Home = () => {
    
    const dispatch = useDispatch();
    const pokemonsAll = useSelector((state)=>state.pokemons);


    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getPokemonByTypes());
    },[dispatch]);


    return (
        <div className={style.Conteiner}>
            {!pokemonsAll.length?(<div className={style.Loading}><Loading></Loading></div> ):(
                    <div>
                        <NavBar></NavBar>
                        <hr />
                        <FilterConteiner/>
                        <CardsConteiner/>
                    </div>   
            )}
            
        </div>
        
        
    )
}

export default Home;