import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import style from "../SearchBar/SearchBar.module.css"

const SearchBar = () => {

    const dispatch = useDispatch();
    const [name,setName] = useState("");

    const handlerChange = (event) =>{
        setName(event.target.value);
    }

    const handlerClick = () => {
        dispatch(getPokemonByName(name));
    }
    
    return(
        <div className={style.ConteinerSearch}>
            <input onChange={handlerChange} type="text" placeholder="Search your pokemon!>"/>
            <button onClick={handlerClick}>Search</button>
        </div>
    )
    
}

export default SearchBar;