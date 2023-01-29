import { useDispatch } from "react-redux";
import { sortByAlphabet } from "../../redux/actions";
import style from "../Filters/FiltersAndSorts.module.css"

const SortByAlphabet = () => {
    
    const dispatch = useDispatch();

    const handlerChange = (event) =>{
        const option = event.target.value;
        dispatch(sortByAlphabet(option));
    }
    return(
        <div className={style.ConteinerSortByAlphabet}>
            <select onChange={handlerChange} name="" id="">
                <option value="d">Order By Alphabet</option>
                <option value="AZ">A to Z</option>
                <option value="ZA">Z to A</option>
            </select>
        </div>
    )
}

export default SortByAlphabet;