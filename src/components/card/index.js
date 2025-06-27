
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

