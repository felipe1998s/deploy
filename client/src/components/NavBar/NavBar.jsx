import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../assents/Pokemon-Logo-PNG-Pic.png"
const NavBar = () => {
    return(
        <nav className={`${style.navBar} container`}>
            <div className={style.header}>
                <Link to="/"><img className={style.logo} src={logo} alt="logo" /></Link> 
            </div>
            <div className={style.buttonContent}>
                <Link to="/home" className={style.btnPrimary}>HOME</Link>
                <Link to="/create" className={style.btnPrimary}>FORM</Link>
            </div>
        </nav> 
    )
}

export default NavBar;