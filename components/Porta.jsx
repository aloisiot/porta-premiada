import styles from '../styles/Porta.module.css';

export default function Porta({selecionada}){
    const estaSelecionada = selecionada ? styles.selecionada : "";

    return (
        <div className={styles.area}>
            <div className={`${styles.portal} ${estaSelecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>3</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}