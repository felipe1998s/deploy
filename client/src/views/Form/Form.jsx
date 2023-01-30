import { useState } from "react";
import axios from "axios";
import style from "./Form.module.css";
import { useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { getPokemonTypes } from "../../redux/actions";
import {Link} from "react-router-dom"
const Form = () =>{

    //https://pokemon.fandom.com/es/wiki/Lista_de_Pok%C3%A9mon_con_sus_estad%C3%ADsticas_base

    const dispatch = useDispatch();
    const types = useSelector(state=>state.types);
    const [arrayTypes,setArrayTypes]=useState([])
    useEffect(()=>{
        dispatch(getPokemonTypes());
    },[dispatch]);

    const [errors,setErrors]=useState({});

    const [form,setForm] = useState({
        name:"",
        life:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[]
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        // validate({...form,[property]:value});
        setForm({...form,[property]:value});
        setErrors(validate({...form,[property]:value}));
    };

    const validate = (form) => {
        //let {name,life,attack,defense,speed,height,weight} = form;
        let expresion = /^(?![.]+$)[a-zA-Z .]*$/gm;
        let errors = {};    
        if(!form.name){
            errors.name="Se requiere un nombre"
        }else if(expresion.test(form.name) === false){
            errors.name="Nombre invalido"
        }else if(!form.life){
            errors.life="Se requiere un valor"
        }else if(form.life<=0){
            errors.life="Se requiere un valor entre 1 y 255"    
        }else if(!form.attack){
            errors.attack="Se requiere un valor"
        }else if(form.attack<=0){
            errors.attack="Se requiere un valor entre 1 y 190"
        }else if(!form.defense){
            errors.defense="Se requiere un valor"
        }else if(form.defense<=0){
            errors.defense="Se requiere un valor entre 1 y 250"
        }else if(!form.speed){
            errors.speed="Se requiere un valor"
        }else if(form.speed<=0){
            errors.speed="Se requiere un valor entre 5 y 180"
        }else if(!form.height){
            errors.height="Se requiere un valor"
        }else if(form.height<=0){
            errors.height="Se requiere un valor"
        }else if(!form.weight){
            errors.weight="Se requiere un valor"    
        }else if(form.weight<=0){
            errors.weight="Se requiere un valor"
        }else if (form.types.length === 0) {
            errors.types = "Types is missing"
        }

        return errors;
    }

    // console.log(form, "<=Form");
    // console.log(!(Object.entries(errors).length===0), "<=errors");
    // console.log(form.types.length===0,"<=form.length");

    const submitHandler = (event) =>{
        event.preventDefault();
        if(errors && (!(Object.values(errors).length===0))){
            return alert("¡Los datos no son validos!");
        }else if(Object.values(form).includes(" ") || (form.types.length===0)){
            return alert("¡Debe completar todos los datos!");
        }
        else{
            axios.post("/pokemons",{...form,types:[...arr]})
            .then(res=>alert("Creando pokemon",res));

            setForm({
                name:"",
                life:"",
                attack:"",
                defense:"",
                speed:"",
                height:"",
                weight:"",
                types:[]
            })
        }
        
    }

    
    function filterTypes(e) {
        setForm({
            ...form,
            types: form.types.filter(el => el.name !== e.target.name)
        });

        setArrayTypes(arrayTypes.filter((type)=>type !== e.target.name));

    }


    let arr = [];
    const idType = (types,arrayTypes) =>{
        for(let i=0;i < arrayTypes.length;i++){
            for(let j=0;j<types.length;j++){
                if(arrayTypes[i]===types[j].name){
                    arr.push(types[j].id);
                }
            }
        }
    }
    
    idType(types,arrayTypes);
    // console.log(arr,"TYPES");
    
    // console.log(arrayTypes,"ARRAYTYPES");

    

    const handleSelect = (e) =>{
        // const id = types.find((type)=>type)
        // console.log(e.target.value, "<==typesDiv");
        // console.log(form.types, "<==FORMDIV");
        setArrayTypes([...arrayTypes,e.target.value]);

        setForm({
            ...form,
            types: [...form.types,{name:e.target.value}]
            //types:[...arrayTypes]
        });
        setErrors(validate({                 
            ...form,
            types: [...form.types, {name:e.target.value}]
            //types:[...arrayTypes]
        }));

    }

    return(
        <div className={style.Conteiner}>
            <div className={style.boxForm}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>name: </label>
                        <input type="text" placeholder="name" value={form.name} onChange={changeHandler} name="name" />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <br />
                    <div>
                        <label>life: </label>
                        <input type="number" placeholder="life"  value={form.life} onChange={changeHandler} name="life" />
                        {errors.life && <p>{errors.life}</p>}
                    </div>
                    <br />
                    <div>
                        <label>attack: </label>
                        <input type="number" placeholder="attack" value={form.attack} onChange={changeHandler} name="attack" />
                        {errors.attack && <p>{errors.attack}</p>}
                    </div>
                    <br />
                    <div>
                        <label>defense: </label>
                        <input type="number" placeholder="defense" value={form.defense} onChange={changeHandler} name="defense"/>
                        {errors.defense && <p>{errors.defense}</p>}
                    </div>
                    <br />
                    <div>
                        <label>speed: </label>
                        <input type="number" placeholder="speed" value={form.speed} onChange={changeHandler} name="speed"/>
                        {errors.speed && <p>{errors.speed}</p>}
                    </div>
                    <br />
                    <div>
                        <label>height: </label>
                        <input type="number" placeholder="height" value={form.height} onChange={changeHandler} name="height"/>
                        {errors.height && <p>{errors.height}</p>}
                    </div>
                    <br />
                    <div>
                        <label>weight: </label>
                        <input type="number" placeholder="weight" value={form.weight} onChange={changeHandler} name="weight"/>
                        {errors.weight && <p>{errors.weight}</p>}
                    </div>
                    <div>
                        <label htmlFor="">Select Types</label>
                        <select onChange={(e)=>handleSelect(e)}>
                            { //e.id ---> e.name
                                types.map( e => {
                                    return (
                                        <option key={e.name} value={`${e.name}` }>{e.name}</option>
                                    )
                                })
                            }
                        </select>
                        {errors.types && (<p>{errors.types}</p>)}
                    </div>
                    <br />
                    <button className={style.btnPrimary} type="submit">SUBMIT</button>
                    <br />
                    <div className={style.title}>
                        <h1>CREATE YOUR POKEMON!</h1>
                    </div>
                    
                </form>
            </div>
            <div className={style.boxTypesFather}>
                <h3>TYPES</h3>
                <div className={style.boxTypes}>
                {
                        form.types?.map( (e) => {
                            return (
                                <div key={e.name}>
                                    <div  className={style.types}>
                                        <li>{e.name}</li>
                                        <button name={`${e.name}`} onClick={(e)=>{filterTypes(e)}}>X</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <Link to="/home"><button className={style.btnPrimary}>HOME</button></Link>
            </div>
        </div>
    )
}

export default Form;