import styles from './boton.module.css'

function Boton({texto}){

    return(<button className={styles.boton}> {texto}
    </button>)
}

export default Boton