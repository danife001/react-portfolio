<<<<<<< HEAD
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

=======
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

>>>>>>> c0c07ef9e2ca9188decae3f5b5407059fbd2b533
export default Header