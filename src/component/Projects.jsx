import { useEffect, useState } from 'react';
import dark from './dark/projects.module.css'
import ligth from './light/projects.module.css'
const Projects=(x)=>{
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
        <div className={style.projects}>
            <div className={style.quotes}>
                <h1>"The only way to do great work is to love what you do." - Steve Jobs</h1>
            </div>
            <div className={style.project_container}>
                <div>
                    <div className={style.box} id={style.kerala}>
                        <div className={style.boxtitle}><h1>Tour to Kerala</h1></div>
                        <div className={style.hovercontent}>
                            <h3>It is an mini project created using ReactJS using CRUD operations. This project is about the tourist spots of Kerala.</h3>
                            <a href="https://tourtokerala.netlify.app/">Visit Website &#8594;</a>
                        </div>                    
                    </div>
                    <div className={style.box} id={style.marvel}>
                        <div className={style.boxtitle}><h1>Marvel Movies</h1></div>
                        <div className={style.hovercontent}>
                            <h3>This project showcases the Marvel Cinematic Universe (MCU) movies and was developed using the Django framework.</h3>
                            <a href="https://n1i2t3h4i5s6h7.pythonanywhere.com/">Visit Website &#8594;</a>
                        </div>                    
                    </div>
                    <div className={style.box} id={style.blog}>
                        <div className={style.boxtitle}><h1>GenZblog</h1></div>
                        <div className={style.hovercontent}>
                            <h3>I've built a 100% fully functional Django blog with user authentication, CRUD operations for 
articles, and comment functionality. The site offers a seamless experience. </h3>
                            <a href="https://genzblog.pythonanywhere.com/">Visit Website &#8594;</a>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects