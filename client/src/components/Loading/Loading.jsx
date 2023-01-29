import React from 'react'
import style from "../Loading/Loading.module.css";
const Loading = () => {
  return (
        <div className={style.Loading}>
            {/* <div className="lds-ripple"><div></div><div></div></div> */}
            <div>
               <img className={style.img}
                src="https://i.pinimg.com/originals/15/3c/fb/153cfb7dcfb406a368a3dc4e35e37efb.gif" alt="pokebola" />
            </div>
            
        </div>
  )
}
export default Loading