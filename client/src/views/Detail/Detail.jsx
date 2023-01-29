import DetailCard from "../../components/DetailCard/DetailCard";
import { useSelector,useDispatch } from "react-redux";
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import { getPokemonById } from "../../redux/actions";
import style from "../Detail/Detail.module.css"
import NavBar from "../../components/NavBar/NavBar";
const Detail = () =>{
    let {id} = useParams()
    const dispatch = useDispatch();
    const pokemon = useSelector((state)=>state.pokemonDetails);
    console.log(pokemon);

    useEffect(()=>{
        dispatch(getPokemonById(id));
    },[dispatch,id]);

    return(
        <div className={style.Conteiner}>
            <div>
                <NavBar></NavBar>
            </div>
            <hr />
            <div className={style.DetailCard}>
                <DetailCard
                    id={pokemon.id}
                    name={pokemon.name}
                    life={pokemon.life}
                    image={pokemon.image}
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    speed={pokemon.speed}
                    weight={pokemon.weight}
                    height={pokemon.height}
                    types={pokemon.types}
                    />
            </div>
        </div>
    )
}

export default Detail;