import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas.";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Jogo(){
  const router = useRouter();  
  const [qtdPortas, setQtd] = useState(+router?.query.portas)
  const [comPresente, setComPresente] = useState(+router?.query.portas)
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    setQtd(+router?.query.portas)
    setComPresente(+router?.query.portas)
    setPortas(criarPortas(qtdPortas, comPresente))
  }, [router, qtdPortas, comPresente])

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