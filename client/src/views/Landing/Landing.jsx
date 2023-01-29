import style from "./Landing.module.css";
// import logo from "../../assents/14408-middle.png"
import logo from "../../assents/Pokemon-Logo-PNG-Pic.png"
import {Link} from "react-router-dom";
const Landing = () => {
    return(
        <div>
            <div>
                <img className={style.img} src={logo} alt="logo"  />
            </div>
            <div className={style.content}>
                <div className={`container ${style.flex}`}>
                    <div className={style.contentLeft}>
                        <h1>Welcome to the pokemon APP</h1>
                        <p>Here you will find all the information about your favorite pokemons.</p>
                        <Link to="/home" className={style.btnPrimary}>VISIT</Link>
                    </div>
                    <div>
                        <img className={style.img2} 
                        src="https://static.wixstatic.com/media/62a03c_ef0232328e7641198fc8eb6336eda5cb~mv2.gif" alt="pokebola" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Landing;