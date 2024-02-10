import { useState } from 'react'
import dark from './dark/nav.module.css'
import light from './light/nav.module.css'
import { Link, NavLink } from 'react-router-dom';
import white from '../image/name.png'
import black from '../image/namedark.png'
const Nav=(x)=>{
  let [name,setName]=useState(white);
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
            setName(black)
            x.target.innerText='🌚';
        }else{
            setStyle(dark);
            setTheme('dark');
            setName(white)
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
                {/* <h1>Nithish</h1> */}
                <img src={name} alt="" srcset="" />
                <section>
                    <ul>
                        <li><button onClick={changeMode}>☀️</button></li>
                        {/* <li><a href="">Home</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About me</a></li> */}
                        <li><NavLink to="/" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>Home</NavLink></li>
                        <li><NavLink to="/projects" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>Projects</NavLink></li>
                        <li><NavLink to="/aboutme" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>About me</NavLink></li>
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
                    <li><NavLink to="/" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>Home</NavLink></li>
                    <hr />
                    <li><NavLink to="/projects" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>Projects</NavLink></li>
                    <hr />
                    <li><NavLink to="/aboutme" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>About me</NavLink></li>
                    <hr />
                </ul>
            </section>
        </header>
    )
}
export default Nav