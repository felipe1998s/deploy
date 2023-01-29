import SearchBar from "../SearchBar/SearchBar";
import FilterBySource from "../Filters/FilterBySource";
import SortByHP from "../Filters/SortByHP";
import SortByAlphabet from "../Filters/SortByAlphabet";
import FilterByType from "../Filters/FilterByType";
import style from "../FiltersConteiner/FiltersConteiners.module.css"
const FilterConteiner = () => {
    return(
        <div >
            <section className={style.Conteiner}>
                <div className={style.Search}>
                    <h4>Search</h4>
                    <SearchBar/>
                </div>
                <div className={style.Filters} >
                    <h4>Filter</h4>
                    <FilterByType/>
                    <FilterBySource/>
                </div>
                <div className={style.Sorts}>
                    <h4 >Sort</h4>
                    <SortByHP/>
                    <SortByAlphabet/>
                </div>
            </section>
        </div>
    )
}

export default FilterConteiner;