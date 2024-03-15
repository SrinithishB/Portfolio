import { useState } from 'react'
import dark from './dark/nav.module.css'
import light from './light/nav.module.css'
import {NavLink } from 'react-router-dom';
import name from '../image/name.png'
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
        if (theme){
            setStyle(light);
            setTheme(false);
            x.target.innerText='🌚';
        }else{
            setStyle(dark);
            setTheme(true);
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
                <img src={name} alt="" srcSet="" />
                <section>
                    <ul>
                    
                        {/* <li><button onClick={changeMode}>☀️</button></li> */}
                        {/* <li><a href="">Home</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About me</a></li> */}
                        <li><NavLink to="/" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>Home</NavLink></li>
                        <li><NavLink to="/projects" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>Projects</NavLink></li>
                        <li><NavLink to="/aboutme" className={({ isActive }) => 
                      (isActive ? style.active : style.notactive)}>About me</NavLink></li>
                      <li><label className="switch">
                      <input type="checkbox" id='checkbox' defaultChecked={theme} onClick={changeMode}/>
                      <span className="slider round"></span>
                    </label></li>
                    </ul>
                    <button onClick={openSidebar}><i className="fa-solid fa-bars"></i></button>
                </section>
            </nav>
            <section className={style.sidebar} id='sidebar'>
              
                <button onClick={closeSidebar}><i className="fa-solid fa-x"></i></button>
                <br /><br />
                <ul>
                    {/* <li><button onClick={changeMode}>☀️</button></li> */}
                    <li><label className="switch">
                      <input type="checkbox" id='checkbox' defaultChecked={theme} onClick={changeMode}/>
                      <span className="slider round"></span>
                    </label></li>
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