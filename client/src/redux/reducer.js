import { GET_POKEMONS,
    GET_POKEMON_BY_ID,
    GET_POKEMON_BY_NAME,
    GET_POKEMON_BY_SOURCE,
    GET_POKEMON_BY_TYPE,
    GET_POKEMON_TYPES,
    SORT_AND_FILTER_BY_HP,
    SORT_BY_AlPHABET} from "./actions";

const initialState = {
    pokemons: [],
    pokemonDetails: {},
    pokemonsFilter: [],
    types:[]
};



const rootReducer = (state=initialState,action) => {

    
    let auxFilter = [];
    switch (action.type) {
        case GET_POKEMONS:
            return {...state, pokemons: action.payload,pokemonsFilter:action.payload};  
        case GET_POKEMON_BY_ID:
            return {...state, pokemonDetails: action.payload};
        case GET_POKEMON_TYPES:
            return {...state,types:action.payload};
        case  GET_POKEMON_BY_NAME:
            if(action.payload==="Not found"){
                return {...state,pokemonsFilter:[]}
            }
            return {...state,pokemonsFilter:action.payload};
        case GET_POKEMON_BY_TYPE:
            if(action.payload){
                const search=(elemento)=>{
                    const name = elemento.types.map((e)=>e.name);
                    return name.includes(action.payload);
                }
                auxFilter=state.pokemons.filter(search);
            }else{
                auxFilter=[...state.pokemons];
            }
            return {...state,pokemonsFilter:auxFilter};

        case GET_POKEMON_BY_SOURCE:
            auxFilter=[...state.pokemonsFilter];
            if(action.payload==="Api"){
                auxFilter=state.pokemons.filter((pokemon)=> pokemon.createdInBD===false);
            }else if(action.payload==="Created"){
                auxFilter=state.pokemons.filter((pokemon)=>pokemon.createdInBD===true)
            }else{
                 auxFilter=[...state.pokemons] 
            };
            return {...state,pokemonsFilter:[...auxFilter]};    
        case SORT_AND_FILTER_BY_HP:

            auxFilter=[...state.pokemonsFilter];

            if(action.payload==="minHP"){
                auxFilter=auxFilter.sort((a,b)=>a.life-b.life);
            }else if(action.payload==="MaxHP"){
                auxFilter=auxFilter.sort((a,b)=>b.life-a.life);
            }else{
                auxFilter=[...state.pokemons];
            }
            
            return{...state,pokemonsFilter:[...auxFilter]};

        case SORT_BY_AlPHABET:
            auxFilter=[...state.pokemonsFilter];
            let alpha = [];
            if(action.payload==="AZ"){
                alpha=auxFilter.sort((a,b)=>a.name.localeCompare(b.name));
            }else if(action.payload==="ZA"){
                alpha=auxFilter.sort((a,b)=>b.name.localeCompare(a.name));
            }else{
                alpha=[...state.pokemons];
            }
            return{...state,pokemonsFilter:[...alpha]}
        default:
            return {...state};
    }
};

export default rootReducer;