import { useDispatch } from "react-redux";
import { getPokemonBySource } from "../../redux/actions";
import style from "../Filters/FiltersAndSorts.module.css"

const FilterBySource = () =>{

    const dispatch = useDispatch();

    const handlerChange = (event) =>{
        const source = event.target.value;
        dispatch(getPokemonBySource(source));
    }

    return(
        <div className={style.ConteinerFilterBySource}>
            <select onChange={handlerChange}>
                <option value="All">All</option>
                <option value="Api">Api</option>
                <option value="Created">Created</option>
            </select>
        </div>
    )
}

export default FilterBySource;