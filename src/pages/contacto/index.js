<<<<<<< HEAD
import Boton from '../../components/boton'
import styles from './contacto.module.css'

function Contacto(){

    return(<div className={styles.contenedor}>
        <div className={styles.contacto}>
            <div className={styles.titulo}>
                <h1>Trabajemos</h1>
                <h3>dime tu idea</h3>
            </div>
            <div>
                <form  className={styles.formulario}>
                    <input placeholder="Nombre"></input>
                    <input placeholder="Correo"></input>
                    <textarea placeholder="Tu Mensaje"></textarea>
                    <Boton texto="contactame"/>
                </form>
            </div>
        </div>
    </div>)
}

=======
import Boton from '../../components/boton'
import styles from './contacto.module.css'

function Contacto(){

    return(<div className={styles.contenedor}>
        <div className={styles.contacto}>
            <div className={styles.titulo}>
                <h1>Trabajemos</h1>
                <h3>dime tu idea</h3>
            </div>
            <div>
                <form  className={styles.formulario}>
                    <input placeholder="Escribe aquí..."></input>
                    <input placeholder="Escribe aquí..."></input>
                    <textarea></textarea>
                    <Boton texto="contactame"/>
                </form>
            </div>
        </div>
    </div>)
}

>>>>>>> c0c07ef9e2ca9188decae3f5b5407059fbd2b533
export default Contacto