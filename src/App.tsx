import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import {levels, calculateImc, Level} from './helpers/imc';
import {GridItem} from './components/GridItem';
import leftArrow from './assets/leftarrow.png'

const App = ()=>{
  const [heightField, setHeightFild] = useState<number>(0);
  const [weightField, setWeightFild] = useState<number>(0);
  const [toshow, setToshow] = useState<Level | null>(null);

  const handleBackButton = ()=>{
    setToshow(null);
    setHeightFild(0);
    setWeightFild(0);
  }

  const handleCalculeteButton = ()=>{
    if(heightField && weightField){
      setToshow(calculateImc(heightField, weightField));
    } else {
      alert('preencha os campos corretamente');
    }
  }
  return(
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img style={{width: '200px'}} src={poweredImage} alt="" />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>calcule seu IMC</h1>
          <p>IMC é a sigla para indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o pelo ideal de cada pessoa</p>
          <input type="number"
          placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
          value={heightField > 0 ? heightField  : ''}
          onChange={e => setHeightFild(parseFloat(e.target.value))} />

          <input type="number"
          placeholder='Digite a sua massa. Ex: 75.3 (em kg)'
          value={weightField > 0 ? weightField  : ''}
          onChange={e => setWeightFild(parseFloat(e.target.value))} />

          <button onClick={handleCalculeteButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toshow &&
          <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {toshow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="" width={25}/>
              </div>
              <GridItem item={toshow}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;