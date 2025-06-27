
import { Link } from "react-router-dom"
import style from "./header.module.css"
import logo from "./logo.png"

function Header(){
    return(<header>
        <Link>
        <section >
            <img className={style.logo} src={logo} alt="logo"/>
        </section>
        </Link>
        <h2>blog</h2>
    </header>)
}

export default Header