<<<<<<< HEAD
import styles from './proyectos.module.css'
import { Link } from "react-router-dom"
import imagen from "./web.png"
import Boton from '../../components/boton'

function Proyectos(){
    return(<div className={styles.projects}>
        <div className={styles.contenido}>
        <div className={styles.descripcion}>
        <h1>hola</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit tellus luctus sagittis,</h3>
        <Boton  texto="Ver todos los proyectos"/>
        </div>
        <div ><Link href="#"><img className={styles.img} src={imagen} alt='Descripción de la imagen' /></Link></div>
        <div ><Link href="#"><img className={styles.img} src={imagen} alt='Descripción de la imagen' /></Link></div>
        <div ><Link href="#"><img className={styles.img} src={imagen} alt='Descripción de la imagen' /></Link></div>
        </div>
        </div>)
} 

=======
import styles from './proyectos.module.css'
import { Link } from "react-router-dom"
import imagen from "./web.png"
import Boton from '../../components/boton'

function Proyectos(){
    return(<div className={styles.projects}>
        <div className={styles.contenido}>
        <div className={styles.descripcion}>
        <h1>hola</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit tellus luctus sagittis,</h3>
        <Boton  texto="Ver todos los proyectos"/>
        </div>
        <div ><Link href="#"><img className={styles.img} src={imagen} alt='Descripción de la imagen' /></Link></div>
        <div ><Link href="#"><img className={styles.img} src={imagen} alt='Descripción de la imagen' /></Link></div>
        <div ><Link href="#"><img className={styles.img} src={imagen} alt='Descripción de la imagen' /></Link></div>
        </div>
        </div>)
} 

>>>>>>> c0c07ef9e2ca9188decae3f5b5407059fbd2b533
export default Proyectos