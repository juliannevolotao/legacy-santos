import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.container}>
      <h1 className={styles.title}>LGCY CONF 25</h1>
      <a href="https://articket.com.br/e/4095/legacy-conf" target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>Garanta seu ingresso</button>
      </a>
    </div>
    </>
  )
}

export default App
