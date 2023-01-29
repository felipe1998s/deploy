import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import NotFoundPokemons from "../NotFoundPokemons/NotFoundPokemons";
import style from "./CardsConteiner.module.css";
const CardsConteiner = () =>{
 
    const pokemonsFilter = useSelector((state)=>state.pokemonsFilter);
    
    const [propsCard,setPropsCard] = useState([]);
    //paginado
    const [currentPage,setCurrentPage]=useState(0);
    const [totalPages,setTotalPages]=useState(0);


    useEffect(()=>{
        setPropsCard([...pokemonsFilter].splice(0,12));
        setCurrentPage(0);
        setTotalPages(Math.ceil(pokemonsFilter.length/12));
    },[pokemonsFilter]);

    const handleForwad = () =>{
        const totalElements = pokemonsFilter.length;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * 12;
        if(firstIndex>=totalElements) return;
        setCurrentPage(nextPage);
        setPropsCard([...pokemonsFilter].splice(firstIndex,12))
    }

    const handleBack = () => {
        const prevPage = currentPage - 1;
        let totalItemsByPages = 12;
        if(prevPage<0) return;
        if(prevPage===0){
            totalItemsByPages=12;
        }
        const firstIndex = prevPage*12;
        setCurrentPage(prevPage);
        setPropsCard([...pokemonsFilter].splice(firstIndex,totalItemsByPages));
    }

    return(
        <>
            <div className={style.Paginated}>
                <button onClick={handleBack}>Prev</button>
                <span>{currentPage + 1} of {totalPages}</span>
                <button onClick={handleForwad}>Next</button>
            </div>
            <div className={style.Container}>
                {propsCard.length===0?(<NotFoundPokemons/>)   
                    :propsCard.map((pokemon)=>{
                        return <div key={pokemon.id}> <Card
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types}
                        /> </div>
                    })
                }
            </div>
        </>
    )
}

export default CardsConteiner;