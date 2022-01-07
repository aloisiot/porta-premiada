import styles from "../styles/Jogo.module.css"
import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas.";
import Link from "next/link";

export default function Jogo(){
    const [portas, setPortas] = useState(criarPortas(4,2));

  function RenderPortas(){
    return (
      <ul className={styles.listaPortas}>
        {portas.map(porta => {
          return <Porta key={porta.numero} porta={porta}
            onChange={portaCorrente => setPortas(atualizarPortas(portas, portaCorrente))}/>
        })}
      </ul>
    )
  }

  return (
    <div className={styles.jogoContainer}>
      <RenderPortas/>
      <div className={styles.botoes}>
          <Link href="/" passHref><button>Inicio</button></Link>
      </div>
    </div>
  )
}