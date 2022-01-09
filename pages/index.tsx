import styles from '../styles/Home.module.css'
import Cartao from "../components/Cartao"
import Link from "next/link"

export default function Home(){

    return (
        <div className={styles.form}>
            <div>
                <Cartao bgColor={"#c0392c"}>
                    <h1 style={{padding: "24px"}}>Monte Hall</h1>
                </Cartao>
                <Cartao/>
            </div>
            <div>
                <Cartao/>
                <Cartao bgColor={"#c0392c"}>
                    <Link href="/jogo/8/5" passHref>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
        </div>
    )
}