import { useState } from 'react'
import dark from './dark/nav.module.css'
import light from './light/nav.module.css'
import { Link } from 'react-router-dom';
const Nav=(x)=>{
    let theme=x.theme.theme;
    let setTheme=x.theme.setTheme;
    function getInitialTheme() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? dark
          : light;
      }
    let [style,setStyle]=useState(getInitialTheme);
    let changeMode=(x)=>{
        if (theme==="dark"){
            setStyle(light);
            setTheme('light');
            x.target.innerText='🌚';
        }else{
            setStyle(dark);
            setTheme('dark');
            x.target.innerText='☀️';
        }
    }
    let openSidebar=()=>{
        let x=document.getElementById('sidebar');
        x.style.display='block';
    }
    let closeSidebar=()=>{
        let x=document.getElementById('sidebar');
        x.style.display='none';
    }
    return(
        <header className={style.header}>
            <nav className={style.nav}>
                <h1>Nithish</h1>
                <section>
                    <ul>
                        <li><button onClick={changeMode}>☀️</button></li>
                        {/* <li><a href="">Home</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About me</a></li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/aboutme">About me</Link></li>
                    </ul>
                    <button onClick={openSidebar}><i className="fa-solid fa-bars"></i></button>
                </section>
            </nav>
            <section className={style.sidebar} id='sidebar'>
                <button onClick={closeSidebar}><i className="fa-solid fa-x"></i></button>
                <br /><br />
                <ul>
                    <li><button onClick={changeMode}>☀️</button></li>
                    <hr />
                    <li><Link to="/">Home</Link></li>
                    <hr />
                    <li><Link to="/projects">Projects</Link></li>
                    <hr />
                    <li><Link to="/aboutme">About me</Link></li>
                    <hr />
                </ul>
            </section>
        </header>
    )
}
export default Nav