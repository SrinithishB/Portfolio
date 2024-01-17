import { useEffect, useState } from "react";
import avatar from "../image/avatar.png";
// import style from "./banner.module.css"
import dark from './dark/banner.module.css'
import ligth from './light/banner.module.css'
const Banner=(x)=>{
    let theme=x.theme.theme;
    let [style,setStyle]=useState(dark);
    useEffect(()=>{
        if (theme==="dark"){
            setStyle(dark);
        }else{
            setStyle(ligth);
        }
    },[theme])
    
    return(
        <div className={style.banner}>
            <div className={style.quotes}>
                <h1>Python Full Stack Developer</h1>
                <br/>
                <p>Python is my tool, and the web is my canvas. Full Stack Developer creating seamless online experiences.</p>
            </div>
            <div className={style.avatar}>
                <img src={avatar} alt="Image not found" srcSet="" />
            </div>
        </div>
    )
}
export default Banner