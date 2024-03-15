import { useEffect, useState } from 'react';
import dark from './dark/intro.module.css'
import ligth from './light/intro.module.css'
const Techstack=(x)=>{
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
        <div className={style.techstack}>
            <div className={style.boxcontainer}>
            <div className={style.box}>
                <div className={style.boxicon}>
                    <i className="fa-brands fa-html5"></i>
                    {/* <FontAwesomeIcon icon="fa-brands fa-html5"></FontAwesomeIcon> */}
                </div>
                <div>
                    <h1>Frontend</h1>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <h2>Languages:</h2>
                    <p>HTML, CSS, JavaScript and, ReactJs</p>
                </div>
            </div>
            <hr />
            <div className={style.box}>
                <div className={style.boxicon}>
                    <i className="fa-solid fa-code"></i>
                    {/* <FontAwesomeIcon icon="fa-solid fa-code" /> */}
                </div>
                <div>
                    <h1>Backend</h1>
                    <p>A strong frontend is the face of your application, but a robust backend is its backbone.</p>
                    <h2>Language and Framework:</h2>
                    <p>Python and, Django</p>
                </div>
            </div>
            <hr />
            <div className={style.box}>
                <div className={style.boxicon}>
                    <i className="fa-solid fa-database"></i>
                    {/* <FontAwesomeIcon icon="fa-solid fa-database" /> */}
                </div>
                <div>
                    <h1>Database</h1>
                    <p>In the digital realm, databases are the libraries where information is both stored and retrieved.</p>
                    <h2>Language:</h2>
                    <p>SQL</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Techstack