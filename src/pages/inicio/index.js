<<<<<<< HEAD
import styles from './inicio.module.css';
import { PiGithubLogoDuotone ,PiLinkedinLogoDuotone } from "react-icons/pi";

function Inicio(){
    return(<div className={styles.inicio}>
    <div className={styles.inicio_contenedor}>
        <h1 className={styles.inicio_titulo}>BIENVENIDO</h1>
<h2 className={styles.inicio_nombre}>Soy <span> [Tu Nombre] </span></h2>
<h2 className={styles.inicio_profesion}>Programador Full Stack</h2>
            <div className={styles.experience}>
                <p>+1 Año de experiencia en desarrollo web</p>
            </div>
                        <div className={styles.icons }>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><PiGithubLogoDuotone  /></a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><PiLinkedinLogoDuotone /></a>
            </div>
    </div>

    </div>)
}

=======
import styles from './inicio.module.css';
import { PiGithubLogoDuotone ,PiLinkedinLogoDuotone } from "react-icons/pi";

function Inicio(){
    return(<div className={styles.inicio}>
    <div className={styles.inicio_contenedor}>
        <h1 className={styles.inicio_titulo}>BIENVENIDO</h1>
<h2 className={styles.inicio_nombre}>Soy <span> [Tu Nombre] </span></h2>
<h2 className={styles.inicio_profesion}>Programador Full Stack</h2>
            <div className={styles.experience}>
                <p>+1 Año de experiencia en desarrollo web</p>
            </div>
                        <div className={styles.icons }>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><PiGithubLogoDuotone  /></a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><PiLinkedinLogoDuotone /></a>
            </div>
    </div>

    </div>)
}

>>>>>>> c0c07ef9e2ca9188decae3f5b5407059fbd2b533
export default Inicio