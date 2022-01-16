import styles from '../styles/Home.module.css'
import Cartao from "../components/Cartao"
import Link from "next/link"
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'

export default function Home(){
    const [qtdPortas, setQtdPortas] = useState(3)
    const [potaPremiada, setPortaPremiada] = useState(2)
    
    return (
        <div className={styles.form}>
            <div>
                <Cartao bgColor={"#c0392c"}>
                    <h1 style={{padding: "24px"}}>Monte Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica 
                        value={qtdPortas}
                        min={3}
                        max={12}
                        text="Qtde portas"
                        onChange={(novaQtd) => setQtdPortas(novaQtd)}
                    />
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica
                        value={potaPremiada}
                        min={1}
                        max={qtdPortas}
                        text="Porta premiada"
                        onChange={(novaQtd) => setPortaPremiada(novaQtd)}
                    />
                </Cartao>
                <Cartao bgColor={"#0A8A62"}>
                    <Link href={`/jogo/${qtdPortas}/${potaPremiada}`} passHref>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
        </div>
    )
}