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

export default Contacto