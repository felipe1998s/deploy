import style from "../DetailCard/DetailCard.module.css";
const DetailCard = (props) =>{
    const {name,life,attack,defense,image,speed,height,weight,types}=props;
    console.log(props)
    // console.log(types);
    return(
         <div className={style.detailConteiner}>
            <div>
                <div className={style.header}>
                    <h1>{name}</h1>
                    <img src={image} alt={`${name}`} className={style.img}/></div>
                </div>
                <div>
                    <br />
                    <div className={style.stats}><label>LIFE: {life}</label></div>
                    <br />
                    <div className={style.stats}><label>ATTACK: {attack}</label></div>
                    <br />
                    <div className={style.stats}><label>DEFENSE: {defense}</label></div>
                    <br />
                    <div className={style.stats}><label>SPEED: {speed}</label></div>
                    <br />
                    <div className={style.stats}><label>HEIGHT: {height}</label></div>
                    <br />
                    <div className={style.stats}><label>WEIGHT: {weight}</label></div>
                    <br />
                </div>
                <div className={style.typesDiv}>
                    <div><h1>TYPES</h1></div>
                    {types && types.map((type)=>{
                        return(<div key={type.name} className={style.type}><h1>{type.name}</h1></div>)})
                    }
                </div>
        </div>
    )
}

export default DetailCard;