<<<<<<< HEAD
import Boton from '../../components/boton';
import Card from '../../components/card'
import styles from './habilidades.module.css'
import { TbCodeCircle , TbFileTypePhp ,TbBrandReact ,TbFileTypeSql , TbDatabase,TbSettings  } from "react-icons/tb";
function  Habilidades(){

    return(<div>
         <div className={styles.services}>
            <h2 className={styles.services_title}>Habilidades</h2>
            <div className={styles.services_grid}>
                <Card titulo="Desarrollador Web" icono={<TbCodeCircle/>}/>
                <Card titulo="PHP" icono={<TbFileTypePhp  />}/>
                <Card titulo="React" icono={<TbBrandReact />}/>
                <Card titulo="SQL" icono={<TbFileTypeSql />}/>
                <Card titulo="Desarrollo de Bases de Datos" icono={<TbDatabase />}/>
                <Card titulo="Mantenimiento de sitios web" icono={<TbSettings />}/>
               
            </div>
        </div>
        <div className={styles.services_boton}>
        <Boton texto="Ver todos las habilidades"/>
        </div>
        </div>
    )
}

=======
import Boton from '../../components/boton';
import Card from '../../components/card'
import styles from './habilidades.module.css'
import { TbCodeCircle , TbFileTypePhp ,TbBrandReact ,TbFileTypeSql , TbDatabase,TbSettings  } from "react-icons/tb";
function  Habilidades(){

    return(<div>
         <div className={styles.services}>
            <h2 className={styles.services_title}>Habilidades</h2>
            <div className={styles.services_grid}>
                <Card titulo="Desarrollador Web" icono={<TbCodeCircle/>}/>
                <Card titulo="PHP" icono={<TbFileTypePhp  />}/>
                <Card titulo="React" icono={<TbBrandReact />}/>
                <Card titulo="SQL" icono={<TbFileTypeSql />}/>
                <Card titulo="Desarrollo de Bases de Datos" icono={<TbDatabase />}/>
                <Card titulo="Mantenimiento de sitios web" icono={<TbSettings />}/>
               
            </div>
        </div>
        <div className={styles.services_boton}>
        <Boton texto="Ver todos las habilidades"/>
        </div>
        </div>
    )
}

>>>>>>> c0c07ef9e2ca9188decae3f5b5407059fbd2b533
export default Habilidades