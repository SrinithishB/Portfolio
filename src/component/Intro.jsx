import { useEffect, useState } from 'react';
import dark from './dark/intro.module.css'
import ligth from './light/intro.module.css'
import devdesk from '../image/desk2.png'
import Techstack from './Techstack';
const Intro=(x)=>{
    let theme=x.theme.theme;
    let [style,setStyle]=useState(dark);
    useEffect(()=>{
        if (theme){
            setStyle(dark);
        }else{
            setStyle(ligth);
        }
    },[theme])
    return(
        <div className={style.intro}>
            <div className={style.devdesk}>
                <img src={devdesk} alt="" srcSet="" />
            </div>
            <div className={style.introtext} id='aboutme'>
                <h1>Hi there!, I'm Srinithish. Nice to meet you.</h1>
                <p>I'm a proficient full-stack Python developer with a knack for creating seamless user interfaces using HTML, CSS, and JavaScript, Reactjs and building robust server-side applications with Django framework. Eager to contribute my skills and passion for clean, efficient solutions to exciting projects. Let's code something great! 💻🚀</p>
            </div>
            <Techstack theme={x.theme}></Techstack>
        </div>
    )
}
export default Intro