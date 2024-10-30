<<<<<<< HEAD
import styles from './card.module.css';

function Card({ titulo, icono }) {
    return (
        <div className={styles.service_item}>
            <div className={styles.icono}>{icono}</div>
            <h3 className={styles.titulo}>{titulo}</h3>
        </div>
    );
}

export default Card;
=======
import styles from './card.module.css';

function Card({ titulo, icono }) {
    return (
        <div className={styles.service_item}>
            <div className={styles.icono}>{icono}</div>
            <h3 className={styles.titulo}>{titulo}</h3>
        </div>
    );
}

export default Card;
>>>>>>> c0c07ef9e2ca9188decae3f5b5407059fbd2b533
