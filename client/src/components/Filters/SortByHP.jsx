import { useDispatch } from "react-redux";
import { sortByHP } from "../../redux/actions";
import style from "../Filters/FiltersAndSorts.module.css"

const SortByHP = () =>{
    
    const dispatch = useDispatch();

    const handlerChange = (event) =>{
        const option = event.target.value;
            dispatch(sortByHP(option));
    }
    return(
        <div className={style.ConteinerSortByHP}>
            <select onChange={handlerChange} name="" id="">
                <option value="OBHP">Order by health points</option>
                <option value="minHP">Min health points</option>
                <option value="MaxHP">Max health points</option>
            </select>
        </div>
    )
}

export default SortByHP;