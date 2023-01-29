import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getPokemonByTypes, getPokemonTypes } from "../../redux/actions";
import style from "../Filters/FiltersAndSorts.module.css"
const FilterByType = () =>{

    const dispatch = useDispatch();
    const types = useSelector((state)=>state.types);

    useEffect(()=>{
        dispatch(getPokemonTypes());
    },[dispatch]);

    const handleChange = (event) =>{
        const type = event.target.value;
        dispatch(getPokemonByTypes(type));
    }


    return(
        <div className={style.ConteinerFilterByType}>
            <select onChange={handleChange} name="" id="">
            <option value=""></option>
            {
                types.map((type)=>{
                    return(
                        <option key={type.name} value={type.name}>{type.name}</option>
                    )
                })
            }
            </select>
        </div>
    )
}

export default FilterByType;