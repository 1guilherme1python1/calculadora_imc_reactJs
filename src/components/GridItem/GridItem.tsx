import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item:Level
}
export const GridItem = ({item}: Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} width='30px'/>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                
            {item.yourImc &&
            <div className={styles.yourImc}>Seu IMC é de {item.yourImc} Kg/m2</div>
            }
                <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}