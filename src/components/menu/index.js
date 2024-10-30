<<<<<<< HEAD
import { Link } from "react-router-dom"
import style from "./menu.module.css"
import { PiIdentificationBadge , PiListChecksLight , PiBrowsersLight ,PiEnvelope  } from "react-icons/pi";


function Menu(){
    return(<section className={style.centered}><ul >
        <li><Link to="/"><PiIdentificationBadge className={style.identification} /></Link></li>
        <li><Link to="/skills"><PiListChecksLight className={style.identification} /></Link></li>
        <li><Link to="/projects"><PiBrowsersLight  className={style.identification} /></Link></li>
        <li><Link to="/contact"><PiBrowsersLight  className={style.identification} /></Link></li>
        <li><PiEnvelope  className={style.identification} /></li>
    </ul></section>)
}

=======
import { Link } from "react-router-dom"
import style from "./menu.module.css"
import { PiIdentificationBadge , PiListChecksLight , PiBrowsersLight ,PiEnvelope  } from "react-icons/pi";


function Menu(){
    return(<section className={style.centered}><ul >
        <li><Link to="/"><PiIdentificationBadge className={style.identification} /></Link></li>
        <li><Link to="/skills"><PiListChecksLight className={style.identification} /></Link></li>
        <li><Link to="/projects"><PiBrowsersLight  className={style.identification} /></Link></li>
        <li><Link to="/contact"><PiBrowsersLight  className={style.identification} /></Link></li>
        <li><PiEnvelope  className={style.identification} /></li>
    </ul></section>)
}

>>>>>>> c0c07ef9e2ca9188decae3f5b5407059fbd2b533
export default Menu