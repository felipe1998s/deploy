import {Link} from "react-router-dom";
import style from "./Card.module.css"
const Card = (props) => {
    const {id,name,image,types} = props;
    return(
        <Link to={`/pokemon/${name}/${id}`} key={id.toString()}>
        <div className={style.Container} key={id.toString()} >
            <img className={style.img} src={image} alt={name} />
            <div className={style.cardInfo}>
                <h1>{name}</h1>
                <div className={style.labelTypes}>
                    {
                    types.map((type)=>{
                        return <h3 key={type.name}>{type.name}</h3>
                    })}
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Card; 