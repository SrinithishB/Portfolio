import { useState } from "react";
import Main from "./component/Main";
import Nav from "./component/Nav"
import "./style.css";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./component/Projects";
import Aboutme from "./component/Aboutme";
const App=()=>{
    function getInitialTheme() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      }
    let [theme,setTheme]=useState(getInitialTheme);
    return(
        <div>
            <BrowserRouter>
            <Nav theme={{theme,setTheme}}></Nav>
                <Routes>
                    <Route element={<Main theme={{theme,setTheme}}></Main>} path="/"></Route>
                    <Route element={<Projects theme={{theme,setTheme}}></Projects>} path="/projects"></Route>
                    <Route element={<Aboutme theme={{theme,setTheme}}></Aboutme>} path="/aboutme"></Route>
                </Routes>
                <Footer theme={{theme,setTheme}}></Footer>
            </BrowserRouter>
            
        </div>
    )
}
export default App