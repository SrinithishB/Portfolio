import { useEffect, useState } from 'react';
import dark from './dark/aboutme.module.css'
import ligth from './light/aboutme.module.css'
const Aboutme=(x)=>{
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
        <div className={style.aboutme}>
            <h1>About me!!!</h1>
            <h2>Hi there!, I'm Srinithish. Nice to meet you.</h2>
            <p>I'm a proficient full-stack Python developer with a knack for creating seamless user interfaces using HTML, CSS, and JavaScript, Reactjs and building robust server-side applications with Django framework. Eager to contribute my skills and passion for clean, efficient solutions to exciting projects. Let's code something great! 💻🚀</p>
            <div className={style.social}>
                    <a href="https://github.com/SrinithishB"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/srinithish-b-4480b6238/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:srinithishofficial@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                </div>
        </div>
    )
}
export default Aboutme