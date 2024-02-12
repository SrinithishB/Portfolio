import style from './dark/footer.module.css'
import name from '../image/name.png'
// import ligth from './light/footer.module.css'
const Footer=()=>{
    return(
        <footer>
            <div className={style.footer}>
                {/* <h1>Nithish</h1> */}
                <img src={name} alt="" srcset="" />
                <h3>Learn and update every day.</h3>
                <div className={style.social}>
                    <a href="https://github.com/SrinithishB"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/srinithish-b-4480b6238/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:srinithishofficial@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer