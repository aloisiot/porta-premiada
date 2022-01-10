import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas.";
import Link from "next/link";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

export default function Jogo(){
  const router = useRouter();  
  const [qtdPortas, setQtd] = useState(+router?.query.portas)
  const [comPresente, setComPresente] = useState(+router?.query.comPresente)
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    setQtd(+router?.query.portas)
    setComPresente(+router?.query.comPresente)
    setPortas(criarPortas(qtdPortas, comPresente))
  }, [router, qtdPortas, comPresente])

  useEffect(() => {
    if(comPresente > qtdPortas || 1 > comPresente){
      Swal.fire("O número da porta premiada é inválido")
        .then(() => router.back())
    }
  })

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