import Presente from './Presente'
import PortaModel from '../model/porta';
import styles from '../styles/Porta.module.css';

interface PortaProps{
    porta: PortaModel;
    onChange: ( novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){
    const porta = props.porta;
    const estaSelecionada = porta.selecionada && !porta.aberta ? styles.selecionada : "";

    function alteraSelecao(){
        props.onChange(porta.alteraSelecao())
    }

    function abrir(event) {
        event.stopPropagation();
        props.onChange(porta.abrir());
    }

    function RenderPorta(){
        return(
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alteraSelecao}>
            <div className={`${styles.portal} ${estaSelecionada}`}>
                {porta.fechada ? <RenderPorta/> : (porta.temPresente && <Presente/>)}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}